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
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock.
        </p>
        <img src="images/icon-fb.png" />
        <img src="images/icon-tw.png" />
        <img src="images/icon-in.png" />
        <img src="images/icon-li.png" />
      </div>
      <div className="footer-sect">
        <h2>Quick Links</h2>
        <ul className="footer-menu">
          <li>
            <a href="#"> &gt; Home</a>
          </li>
          <li>
            <a href="#"> &gt; About us</a>
          </li>
          <li>
            <a href="#"> &gt; Tutorial</a>
          </li>
          <li>
            <a href="#"> &gt; Event</a>
          </li>
          <li>
            <a href="#"> &gt; Gallery</a>
          </li>
          <li>
            <a href="#"> &gt; Press Release</a>
          </li>
          <li>
            <a href="#"> &gt; Courses</a>
          </li>
          <li>
            <a href="#"> &gt; Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-sect">
        <h2>Contact Info</h2>
        <ul className="footer-contact">
          <li>
            <b>Email :</b> reply@bestinstituteeducation.com{" "}
          </li>
          <li>
            <b>Call :</b> +91 -123 456 7890{" "}
          </li>
          <li>
            <b>Fax :</b> +91 -123 4567890{" "}
          </li>
          <li>
            <b>Website :</b> https://www.dezven.com{" "}
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
