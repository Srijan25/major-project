import React from 'react'
import './styles/student.css'

const Hod = () => {
    return (
        <div className="stu">
        <h1>Welcome Back, Srijan</h1>
      <div className="student">
        <div className="stu-container">
          <a className="card1" href="subject">
            <h3>All Teachers</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="subject">
            <h3>All Students</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="signup">
            <h3>Add User</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="signup">
            <h3>Add Event</h3>

            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="signup">
            <h3>Add Announcment</h3>

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

        
      </div>
    </div>
    )
}

export default Hod
