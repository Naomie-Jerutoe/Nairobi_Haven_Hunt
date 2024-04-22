import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import M from 'materialize-css';
import "./Header.css";
import 'materialize-css/dist/css/materialize.min.css';

function Header() {
  useEffect(() => {
    // Initialize the sidenav
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div className='headers'>
      <nav className='black'>
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo"><img src="./src/components/Header/haven.jpg" alt="Logo" /></Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/register'><i className="material-icons">account_circle</i>
            </Link></li>
            <li><Link to='/properties'>Properties</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
      <li><Link to='/register'><i className="material-icons">account_circle</i></Link></li>
            <li><a href="badges.html">Components</a></li>
            <li><Link to='/properties'>Properties</Link></li>
            <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  );
}

export default Header;
