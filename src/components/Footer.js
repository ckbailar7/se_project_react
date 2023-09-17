import "../blocks/Footer.css";
import React from "react";

function Footer() {
  const currentDate = new Date();
  return (
    <footer className="footer">
      <div>Developed by Practicum student Jared Girvan</div>
      <div>{currentDate.getFullYear()}</div>
    </footer>
  );
}

export default Footer;
