import React from 'react'
import './styles/about.css';

const About = () => {
    return (
        <div className="feat bg-gray pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="section-head col-sm-12">
        <h4>
          <span>About </span>  Gyan Vihar University
        </h4>
        <p>
        Vision: To become a globally renowned center of excellence that transforms generations through its commitment to innovations in education, research, entrepreneurship, critical thinking and scientific temperament.
        </p>
      </div>
      
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_two">
            <i className="fa fa-anchor" />
          </span>
          <h6>Creative Design</h6>
          <p>
            We are always creative and and always lisen our costomers and we mix
            these two things and make beast design.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_three">
            <i className="fa fa-hourglass-half" />
          </span>
          <h6>24 x 7  Support</h6>
          <p>
            If you has any problem and any query we are always happy to
            help then.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_four">
            <i className="fa fa-database" />
          </span>
          <h6>Business Growth</h6>
          <p>
            Everyone wants to live on top of the mountain, but all the happiness
            and growth occurs while you're climbing it
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_one">
            <i className="fa fa-globe" />
          </span>
          <h6>World Class Infrastructure</h6>
          <p>
          At Gyan Vihar we benchmark only against the best institutions around the world. Our faculty and senior team travel all over the globe to learn and imbibe the best practices so that we can give a solid foundation for learning.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_five">
            <i className="fa fa-upload" />
          </span>
          <h6>Hi-Tech Campus</h6>
          <p>
          All Gyan Vihar's Campus is connected to Head Office of the Campus, Jaipur over VPN Network, enabling us to transmit Live Class Rooms to all locations through e-Learning Solution and IP Cameras. Complete campus is fully Wi-Fi connect to surf the internet.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_six">
            <i className="fa fa-camera" />
          </span>
          <h6>Top Placements</h6>
          <p>
          Biggest strength of Gyan Vihar, An unique Academic partners and Corporate Resource Centre to facilitate excellent placements to our students. Our Alumni all over the world in leading companies like Microsoft, Amazon, Red Hat, and TATA.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default About
