import React,{useState,useEffect} from "react";
import "./styles/subject.css";
import axios from "axios";

const Subject = () => {
  const [subject, setSubject] = useState([]);
  
  const dept = window.localStorage.getItem("dept");
  const sem = window.localStorage.getItem("semester");
  const teacherId = window.localStorage.getItem("userId");
  const role = window.localStorage.getItem("role");

  const fetchdata = () => {
    if(role === "teacher"){
      axios.get("http://localhost:8080/api/subject/viewByTeacher/"+teacherId).then((res) => {
        console.log(res.data);
        setSubject(res.data);
    });
    }
    else
    {
    axios.get("http://localhost:8080/api/subject/view/"+sem+"/"+dept).then((res) => {
      console.log(res.data);
      setSubject(res.data);
     
    });
  };
}

  

  useEffect(() => {

    fetchdata();
  }, []);

  const units = (id) => {
    window.location.href = "/notes/"+id;
  }

  

  return (
    <div className="main-section">
      <div className="course-header">
        <i className="mode-switch fas fa-moon" />
        <h1>Your Subjects</h1>
      </div>
      {
        subject.map((item) => {
          return (
            <>
      <div className="courses">
        <div className="course html" tabIndex={1}>
          <div className="course-info">
            <span>{item.subjectCode}</span>
            <h5>{item.subjectName}</h5>
            <a href="#" tabIndex={2}>
              Chapters <i className="fas fa-chevron-right" />
            </a>
          </div>
          <div className="course-more">
            {
              item.units.map((unit) => {
                return (
                  <>
            <div className="details">
              <h5>{unit.unitName}</h5>
            </div>
            </>
                )
              })
            }
            
            <a className="continue-btn html" tabIndex={4} href="#" onClick={() => units(item.subjectId)}>
              Continue
            </a>
          </div>
        </div>
      </div>
      </>

          )
        })
      }
    </div>
  );
};

export default Subject;
