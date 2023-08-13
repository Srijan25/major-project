import React from 'react'
import './styles/student.css';

const teacher = () => {
    return (
        <div className="stu">
        <h1>Welcome Back, Teacher</h1>
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
          <a className="card1" href="subject">
            <h3>Attendance</h3>

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
            <h3>Announcement</h3>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        
      </div>
    </div>
        )
    }

export default teacher
