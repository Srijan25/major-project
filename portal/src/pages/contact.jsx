import React from 'react'
import './styles/contact.css';

const Contact = () => {
    return (
        <>
  <div className="contact_us">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="contact_inner">
            <div className="row">
              <div className="col-md-10">
                <div className="contact_form_inner">
                  <div className="contact_field">
                    <h3>Contatc Us</h3>
                    <p>
                      Feel Free to contact us any time. We will get back to you
                      as soon as we can!.
                    </p>
                    <input
                      type="text"
                      className="form-control form-group"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="form-control form-group"
                      placeholder="Email"
                    />
                    <textarea
                      className="form-control form-group"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <button className="contact_form_submit">Send</button>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="right_conatct_social_icon d-flex align-items-end">
                  <div className="socil_item_inner d-flex">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_info_sec">
              <h4>Contact Info</h4>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-headset" />
                <span>+91 8009 054294</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-envelope-open-text" />
                <span>info@flightmantra.com</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-map-marked-alt" />
                <span>
                  1000+ Travel partners and 65+ Service city across India, USA,
                  Canada &amp; UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="map_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="map_inner">
            <h4>Find Us on Google Map</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quo beatae quasi assumenda, expedita aliquam minima tenetur
              maiores neque incidunt repellat aut voluptas hic dolorem sequi ab
              porro, quia error.
            </p>
            <div className="map_bind">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.940680638939!2d75.85985907630553!3d26.8100173644946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc832568c7fad%3A0xede86f1902a9ce10!2sSuresh%20Gyan%20Vihar%20University!5e0!3m2!1sen!2sin!4v1691844340230!5m2!1sen!2sin" 
            width="100%"
                height={450}
                
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default Contact
