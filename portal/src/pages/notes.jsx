import React,{useState,useEffect} from "react";
import "./styles/notes.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Notes = () => {
  const { id } = useParams();
  const subjectId = id;
  const [notes, setNotes] = useState([]);

  const fetchdata = () => {
    axios.get("http://localhost:8080/api/unit/unitsBySubject/"+ subjectId).then((res) => {
      console.log(res.data);
      setNotes(res.data);
    });

  };

  useEffect(() => {
    fetchdata();
  }, []);

  const pdfByUnit = (id) => {
    window.location.href = "/pdf/"+id;
  }



  return (
    <div className="notes">
      {
        notes.map((item) => {
          return (
            <>
    <div className="notes-container">
      <a className="card4" href="#"  onClick={() =>pdfByUnit(item.unitId)} >
        <h3>Unit {item.unitNumber}</h3>
        <h3>Unit {item.unitName}</h3>
        <p className="small">
          {item.unitDesc}
        </p>
        <div className="dimmer" />
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
    </>

          )
        })
      }
    </div>
  );
};

export default Notes;
