import React from 'react';
import './styles/footer.css';

function Footer() {
  return (
    <>
  {/*-------- Footer HTML Starts -------*/}
  <div className="footer">
    <div className="container">
      <div className="footer-sect">
        <h2>Best Institute For Education</h2>
        <p>
        Vision: To become a globally renowned center of excellence that transforms generations through its commitment to innovations in education, research, entrepreneurship, critical thinking and scientific temperament.
        </p>
        
      </div>
      <div className="footer-sect">
        <h2>Quick Links</h2>
        <ul className="footer-menu">
          <li>
            <a href="/"> &gt; Home</a>
          </li>
          <li>
            <a href="about"> &gt; About us</a>
          </li>
          <li>
            <a href="/login"> &gt; Login</a>
          </li>
          <li>
            <a href="/events"> &gt; Event</a>
          </li>
          <li>
            <a href="/ann"> &gt; Announcement</a>
          </li>
          <li>
            <a href="/contact"> &gt; Contact-Us</a>
          </li>
          <li>
            <a href="/contact"> &gt; Location</a>
          </li>
          
        </ul>
      </div>
      <div className="footer-sect">
        <h2>Contact Info</h2>
        <ul className="footer-contact">
          <li>
            <b>Email :</b> admissions@mygyanvihar.com{" "}
          </li>
          <li>
            <b>Call :</b> +91 979 904 8000{" "}
          </li>
          <li>
            <b>Fax :</b> +91 9413 345 444{" "}
          </li>
          <li>
            <b>Website :</b> https://www.gyanvihar.org/{" "}
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*-------- Footer HTML Ends -------*/}
</>

  );
}

export default Footer;
