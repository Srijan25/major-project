import React,{useState,useEffect} from "react";
import "./styles/feedback.css";
import axios from "axios";
import swal from 'sweetalert';

const AddEvent = () => {
  const handleChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
    };

const [data, setData] = useState({
  eventsTitle: "",
    eventsDescription: "",
    eventsDate: "",
    eventsImage: "",
});

 const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/events/create", data).then((res) => {
    console.log(res.data);
    const eventsId = res.data.eventsId;
    const formData = new FormData();
    formData.append("image", photo);
    axios.post("http://localhost:8080/api/events/event/img_upload/"+eventsId, formData)
    .then((res) => {
        console.log(res);
        swal("Success", "Event Created Successfully", "success");
    })
    .catch((err) => {
        console.log(err);
        swal("Error", "Event Already Exists", "error");
    });
    })
    .catch((err) => {
    console.log(err);
    swal("Error", "Event Already Exists", "error");
    });

    };

    const [photo, setPhoto] = useState("");
    const onFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    useEffect(() => {
        console.log(data);
    }, [data]);


        
    





    
    
    return (
        <>
        <header>
          <h1 id="title" className="text-center">
           Add Event
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
              onChange={(e) => handleChange(e, "eventsTitle")}
              value={data.eventsTitle}
              
            />
          </fieldset>
          
  
          <fieldset>
            <p className="pform">Description of Event</p>
            <textarea
              id="comments"
              name="comments"
              placeholder="Your answer"
              className="input-textarea"
              defaultValue={""}
              onChange={(e) => handleChange(e, "eventsDescription")}
              value={data.eventsDescription}
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
                  onChange={(e) => handleChange(e, "eventsDate")}
                  value={data.eventsDate.slice(0,10)}
              />
          </fieldset>
          <fieldset>
                <label id="image-label" htmlFor="image">
                    Image
                </label>
                <input
                    id="image"
                    type="file"
                    placeholder="Your answer"
                    required=""
                    className="form-control"
                    onChange={onFileChange}

                />
            </fieldset>
            
          
  
          <fieldset>
            <button on type="submit" id="submit" className="submit-button">
              Submit
            </button>
          </fieldset>
        </form>
      </>
  
    );

};

export default AddEvent;