import React from "react";
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
import "./styles/student.css";
import axios from "axios";
import swal from 'sweetalert';
const student = () => {
  const userId = window.localStorage.getItem("userId");
  const PayByRazorPay = () => {
    const options = {
      key: "rzp_test_QvfhRP9slPcend",
      amount: 50000 * 100,
      currency: "INR",
      name: "University",
      description: "Pay to University",

      handler: function (response) {
        console.log(response);
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
        axios.put("http://localhost:8080/api/users/user/feeStatusUpdate/"+userId+"/1" ).then((res) => {
          console.log(res.data);
        });

        swal.fire({
          title: "Payment Successfull",
          text: "Payment Id: " + response.razorpay_payment_id,
          icon: "success",
          confirmButtonText: "Ok",
        });

      },
      prefill: {
        name: "Srijan",
        email: "srijanksah02@gmail.com",
        contact: "7489581850",
      },
      notes: {
        address: "ShopEase Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const pay = () => {
    PayByRazorPay();
  };


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
        {/* <div className="stu-container">
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
        </div> */}
        <div className="stu-container">
          <a className="card1" href="ann">
            <h3>Announcements</h3>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="stu-container">
          <a className="card1" href="feedback">
            <h3>Feedback</h3>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div onClick={pay} className="stu-container">
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
