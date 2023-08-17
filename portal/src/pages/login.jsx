
import React, { useEffect, useState } from "react";
import "./styles/login.css";
import logingif from "../assests/login.gif"
import axios from "axios";
import swal from 'sweetalert';


const Login = () => {

    const handleChange = (e, field) => {
        setData({ ...data, [field]: e.target.value });
        };

    const [data, setData] = useState({
        emailId: "",
        password: "",
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/users/login", data).then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name); 
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("semester", res.data.semester);
        localStorage.setItem("dept", res.data.dept.deptId);
        

        if (res.data.role === "student") {
            window.location.href = "/student";
        }
        if (res.data.role === "teacher") {
            window.location.href = "/teacher";
        }
        if (res.data.role === "hod") {
            window.location.href = "/hod";
        }
        
        }).catch((err) => {
            console.log(err);
            swal({
                title: "Invalid Credentials",
                text: "Please enter valid credentials",
                icon: "error",
                button: "Ok",
              });
        }
        );
    };

    

  return (
    <>
      
      <meta charSet="utf-8" />
      <div className="wrapper" style={{height: 'fit-content',margin:'50px 70px',paddingBottom:'20px' }}>
        <div className="formcont" style={{backgroundColor:'white',margin:'30px',padding:'20px'}}>
          <img class="logingif" src={logingif}  alt="" style={{marginTop:'-30px'}}/>

          <form className="loginform"  onSubmit={submitForm} style={{marginTop:'-20px',height:'400px',width:'350px'}} >
            <div className="title">Login</div>
            <div className="field">
              <input
                type="emailId"
                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId}
                required
                
              />
              
              <label>Email Address</label>
            </div>
            <div className="field">
              <input
                type="password"
                id="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password}
                required
                
              />
              
              <label>Password</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div> */}
            </div>
            <div className="field">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="signup">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
