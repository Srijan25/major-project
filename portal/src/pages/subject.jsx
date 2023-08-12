import React from "react";
import "./styles/subject.css";

const Subject = () => {
  return (
    <section className="main-section">
      <div className="course-header">
        <i className="mode-switch fas fa-moon" />
        <h1>Your Subjects</h1>
      </div>
      <div className="courses">
        <div className="course html" tabIndex={1}>
          <div className="course-info">
            <span>Subject</span>
            <h5>Basic HTML</h5>
            <a href="#" tabIndex={2}>
              Chapters <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div className="course-more">
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <a className="continue-btn html" tabIndex={4} href="notes">
              Continue
            </a>
          </div>
        </div>
        <div className="course html" tabIndex={1}>
          <div className="course-info">
            <span>Subject</span>
            <h5>Basic HTML</h5>
            <a href="#" tabIndex={2}>
              Chapters <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div className="course-more">
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <div className="details">
              <h5>Introduction to web Application</h5>
            </div>
            <a className="continue-btn html" tabIndex={4} href="notes">
              Continue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subject;
