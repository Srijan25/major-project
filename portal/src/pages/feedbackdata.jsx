import React,{useState,useEffect} from "react";
import './styles/list.css';
import axios from "axios";

const FeedbackData = () => {
  const [feedback, setFeedback] = useState([]);
  const fetchdata = () => {
    axios.get("http://localhost:8080/api/feedback/all").then((res) => {
      console.log(res.data);
      setFeedback(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
  <div className="list">
    {/*for demo wrap*/}
    <h1>Teacher FeedBack</h1>
    <div className="tbl-header">
      <table cellPadding={0} cellSpacing={0} border={0}>
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Subject</th>
            <th>Practical Knowledge</th>
            <th>Teaching Skills</th>
            <th>Communication Skills</th>
            <th>Behaviour</th>
            <th>Overall Rating</th>
            <th>message</th>

          </tr>
        </thead>
      </table>
    </div>
    <div className="tbl-content">
      <table cellPadding={0} cellSpacing={0} border={0}>
        <tbody>
          {feedback.map((feedback,index) => (
              <tr key={index}>

                  <td>{feedback.feedBackFor.name}</td>
                  <td>{feedback.subject}</td>
                  <td>{feedback.parameter1}</td>
                  <td>{feedback.parameter2}</td>
                  <td>{feedback.parameter3}</td>
                  <td>{feedback.parameter4}</td>
                  <td>{feedback.parameter5}</td>
                  <td>{feedback.message}</td>
              </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  </div>
  
</>
  );
};

export default FeedbackData;