import React, { useEffect, useState } from "react";
import "./styles/login.css";
import loginimg from "../assests/login.gif";
import axios from "axios";
import swal from "sweetalert";
import Modal from "./Modal";
import { FormGroup, Form, Input, Label, Row, Col } from 'reactstrap';





const Signup = () => {
  const [isSOpen, setIsSOpen] = useState(false);
  const [semester, setSemester] = useState(false);

  const semOpen = () => {
    setSemester(true);  
  }

  const semClose = () => {
    setSemester(false);
  }
  let menu = null;
  if(semester){
    menu = (
      <>
      <select id="semesterSelect" name="semester" onChange={(e) => handleChange(e, "semester")}>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
        </select></>
    )
  }
    




    const openSModal = () => {
        setIsSOpen(true);
    };

    const closeSModal = () => {
        setIsSOpen(false);
    };
  const [isTOpen, setIsTOpen] = useState(false);

    const openTModal = () => {
        setIsTOpen(true);
    };

    const closeTModal = () => {
        setIsSOpen(false);
    };

    const [photo, setPhoto] = useState(null);

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    };


    

    const handleChange = (e, field) => {    
        setData({ ...data, [field]: e.target.value });
        };

    const [data, setData] = useState({
        name:"",
        emailId: "",
        mobileNumber:"",
        password: "",
        role:"",
        semester:"",
        studentRoll:"",
        

    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const submitForm = (e) => {
        e.preventDefault();
       axios.post("http://localhost:8080/api/users/signup", data)
        .then((res) => {
            console.log(res);
            const formData = new FormData();
            formData.append("image", photo);
            const userId = res.data.userId;
            axios.post("http://localhost:8080/api/users/user/img_upload/"+userId, formData)
            swal("Success", "User Created Successfully", "success");

            // if(data.role==="student"){
            //   openSModal();
            // }
            // else if(data.role==="teacher"){
            //   openTModal();
            // }
            // else{
            //   swal("Error", "User Already Exists", "error");
            // }
           
           
        }
        )
        .catch((err) => {
            console.log(err);
            swal("Error", "User Already Exists", "error");
        }
        );

        

    };
  

  return (
    <>
    
      <meta charSet="utf-8" />
      <div className="wrapper" style={{ height: 'fit-content' }}>
        <div className="formcont"  style={{backgroundColor:'white',paddingTop:'-30px',marginTop:'10px'}}>
          <img className="logingif" src={loginimg} alt="" />


          <form className="loginform" onSubmit={submitForm}>
            <div className="title">Sign-up</div>
            <div className="field">
              <input
                type="text"

                id="name"
                onChange={(e) => handleChange(e, "name")}
                value={data.name} required
                
              />
              
              <label> Name</label>
            </div>
            <div className="field">
              <input
                type="text"

                id="studentRoll"
                onChange={(e) => handleChange(e, "studentRoll")}
                value={data.studentRoll} required
                
              />
              
              <label> Unique Id</label>
            </div>

            <div className="field">
              <input
                type="emailId"

                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId} required
              />
             
              <label> Email</label>
            </div>
            <div className="field">
              <input
                type="tel"

                id="mobileNumber"
                onChange={(e) => handleChange(e, "mobileNumber")}
                value={data.mobileNumber} required
                
              />
             
              <label> Mobile</label>
            </div>
            <div className="field">
              <input
                type="password"

                id="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password} required
               
              />
             

              <label>Password</label>
            </div>
            <div className="role">
              <input type="radio" id="student" onClick={semOpen} name="role" value="student" onChange={(e) => handleChange(e, "role")} />
              <label for="student">Student</label>
              {menu}
              <br />
              <input type="radio" id="teacher" name="role" onClick={semClose} value="teacher" onChange={(e) => handleChange(e, "role")} />
              <label for="teacher">Teacher</label>
            </div>
            <label for="file" className="filelabel"> <ion-icon name="cloud-upload-outline" /> Upload Photo</label>
            <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={handlePhoto} />
            <div className="field">
              <input type="submit"  value="Register" />
            </div>

            <div className="google-btn" id="singInDiv"></div>

            <div className="signup-link">
              Already a member? <a href="login">Login</a>
            </div>
          </form>
          <Modal isOpen={isSOpen} onClose={closeSModal}>
                            <div className="modal-div" >
                                <div className="popup-content">
                                    
                                    <section>
  <div className="form-box">
    <div className="form-value">
      <form action="">
        <h2>Student Login</h2>
        <div className="inputbox">
          <ion-icon name="mail-outline" />
          <input type="text" required="" />
          <label htmlFor="">Username</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline" />
          <input type="password" required="" />
          <label htmlFor="">Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button onClick={closeSModal}>Log in</button>
        
      </form>
    </div>
  </div>
</section>

                                </div>
                            </div>
                        </Modal>
          <Modal isOpen={isTOpen} onClose={closeTModal}>
                            <div className="modal-div" >
                                <div className="popup-content">
                                    
                                    <section>
  <div className="form-box">
    <div className="form-value">
      <form action="">
        <h2>Teacher Login</h2>
        <div className="inputbox">
          <ion-icon name="mail-outline" />
          <input type="text" required="" />
          <label htmlFor="">Username</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline" />
          <input type="password" required="" />
          <label htmlFor="">Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button onClick={closeTModal}>Log in</button>
        
      </form>
    </div>
  </div>
</section>

                                </div>
                            </div>
                        </Modal>
        </div>
      </div>
    </>

  );
};

export default Signup;