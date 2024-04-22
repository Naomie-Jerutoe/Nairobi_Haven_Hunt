import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const myName = "Nairobi haven dev";
  return (
    <div>
      <footer id="footer">
        <p id="footer-content">
          &copy; {myName} {currentYear} . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
