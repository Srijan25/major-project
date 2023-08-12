import React from "react";
import { Link } from "react-router-dom";
import "./styles/student.css";
const student = () => {
  return (
    <div className="stu">
        <h1>Welcome Back, Srijan</h1>
      <div className="student">
        <div className="stu-container">
          <a className="card1" href="subject">
            <h3>My Subjects</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="#">
            <h3>My Grades</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="#">
            <h3>My Attendance</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="#">
            <h3>My Assignment</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="ann">
            <h3>Announcements</h3>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="#">
            <h3>Feedback</h3>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="#">
            <h3>Fees</h3>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default student;
