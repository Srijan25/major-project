import React, { useEffect, useState } from "react";
import "./styles/login.css";
import loginimg from "../assests/login.gif";




const Signup = () => {

    const handleChange = (e, field) => {    
        setData({ ...data, [field]: e.target.value });
        };

    const [data, setData] = useState({
        name:"",
        emailId: "",
        mobileNumber:"",
        password: "",
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(data);
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
              <input type="submit" value="Register" />
            </div>

            <div className="google-btn" id="singInDiv"></div>

            <div className="signup-link">
              Already a member? <a href="login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default Signup;