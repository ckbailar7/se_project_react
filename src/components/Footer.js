import "../blocks/Footer.css";
import React from "react";

function Footer() {
  const fullYear = new Date();
  return (
    <footer className="footer">
      <div>Developed by Practicum student Jared Girvan</div>
      <div>{fullYear.getFullYear()}</div>
    </footer>
  );
}

export default Footer;
