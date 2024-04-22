import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function LoginRegister() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rightPanelActive, setRightPanelActive] = useState(true);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      alert('User registered successfully');
      navigate('/register');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/properties");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={`container ${rightPanelActive ? "right-panel-active" : ""}`}>
      <div className="container__form container--signup">
        <form className="form" id="form1" onSubmit={handleSignUp}>
          <h2 className="form__title">Sign Up</h2>
          <input type="text" placeholder="User" className="input" value={username} onChange={handleUsernameChange} />
          <input type="email" placeholder="Email" className="input" value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Password" className="input" value={password} onChange={handlePasswordChange} />
          <input type="password" placeholder="Confirm Password" className="input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          {passwordError && <p className="error">{passwordError}</p>}
          <button className="btn">Sign Up</button>
        </form>
      </div>
      <div className="container__form container--signin">
        <form className="form" id="form2" onSubmit={handleSignIn}>
          <h2 className="form__title">Sign In</h2>
          <input type="text" placeholder="User" className="input" value={username} onChange={handleUsernameChange} />
          <input type="password" placeholder="Password" className="input" value={password} onChange={handlePasswordChange} />
          <a href="#" className="link">Forgot your password?</a>
          <button className="btn">
            <Link to='/properties' >Sign In</Link>
            
            </button>
        </form>
      </div>
      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" id="signIn" onClick={() => setRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" id="signUp" onClick={() => setRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
