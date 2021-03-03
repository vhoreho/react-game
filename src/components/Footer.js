import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <img
          className="footer-school-img"
          src="https://rs.school/images/rs_school_js.svg"
          alt="RS School"
        />
        <a href="https://rs.school/js/" className="footer-school-link">
          RS School
        </a>
      </div>
      <div className="footer-info">
        <a
          className="footer-github-link"
          href="https://github.com/vhoreho"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <span className="footer-date">{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
