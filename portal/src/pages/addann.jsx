import React, { useState, useEffect } from "react";
import "./styles/feedback.css";
import axios from "axios";
import swal from 'sweetalert';


const AddAnn = () => {
    const handleChange = (e, field) => {
        setData({ ...data, [field]: e.target.value });
    };

    const [data, setData] = useState({
        title: "",
        description: "",
        date: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/ann/create", data).then((res) => {
            console.log(res.data);
            swal("Success", "Announcement Created Successfully", "success");
        })
            .catch((err) => {
                console.log(err);
                swal("Error", "Announcement Already Exists", "error");
            });

    };

    useEffect(() => {
        console.log(data);
    }, [data]);


    return (
        <>
      <header>
        <h1 id="title" className="text-center">
         Add Announcments
        </h1>
        
      </header>
      <form id="survey=-form" onSubmit={submitForm}>
        <fieldset>
          <label id="name_and_surname-label" htmlFor="name_and_surname">
            Title
          </label>
          <input
            id="name_and_surname"
            type="text"
            placeholder="Your answer"
            required=""
            className="form-control"
            onChange={(e) => handleChange(e, "title")}
            value={data.title}
          />
        </fieldset>
        

        <fieldset>
          <p className="pform">Announcment</p>
          <textarea
            id="comments"
            name="comments"
            placeholder="Your answer"
            className="input-textarea"
            defaultValue={""}
            onChange={(e) => handleChange(e, "description")}
            value={data.description}
          />
        </fieldset>

        <fieldset>
            <label id="date-label" htmlFor="date">
                Date
            </label>
            <input
                id="date"
                type="date"
                placeholder="Your answer"
                required=""
                className="form-control"
                onChange={(e) => handleChange(e, "date")}
                value={data.date}
            />
        </fieldset>
        

        <fieldset>
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  
    )
}

export default AddAnn;