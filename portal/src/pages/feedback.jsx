import React,{useEffect,useState} from "react";
import "./styles/feedback.css";
import axios from "axios";
import swal from 'sweetalert';
const AddFeedback = () => {

  const [data, setData] = useState({
    feedBackFor: {
      userId: "",
    },
    subject: "",
    parameter1: "",
    parameter2: "",
    parameter3: "",
    parameter4: "",
    parameter5: "",
    message: "",
  });

  const handleChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post("http://localhost:8080/api/feedback/create", data).then((res) => {
      console.log(res.data);
      swal("Success", "Feedback Submitted Successfully", "success");
    })
    .catch((err) => {
      console.log(err);
      swal("Error", "There is some error", "error");
    });
  };

  const fetchdata = async () => {
    const response = await axios.get('http://localhost:8080/api/users/usersByRole/teacher')
    setTeacherList(response.data)
    console.log(response.data)
}
useEffect(() => {
    fetchdata()
}, [])

  const [teacherList, setTeacherList] = useState([])
  

  return (
    <>
      <header>
        <h1 id="title" className="text-center">
          Feedback to Teachers
        </h1>
        <p id="decription" className="text-center decription">
          Please fill out the form so we can contact you 😊
        </p>
      </header>
      <form id="survey=-form" onSubmit={handleSubmit}>
       
        <fieldset>
          <label id="name_and_surname-label" htmlFor="name_and_surname">
            Select Teacher 
          </label>
        <select id="teacher" name="teacher" >
        {teacherList.map((teacher) => {
            return (
              <option 
              value={teacher.userId}
              onChange={(e) => handleChange(e, "feedBackFor.userId")}

              >{teacher.name}</option>
            );
          })}
            
        </select>
        </fieldset>
        <fieldset>
          <label id="name_and_surname-label" htmlFor="name_and_surname">
            Subject
          </label>
          <input
            id="name_and_surname"
            type="text"
            placeholder="Your answer"
            required=""
            className="form-control"
            onChange={(e) => handleChange(e, "subject")}
            value={data.subject}

          />
        </fieldset>

        <fieldset>
          <p className="pform">Practical Implementation</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="Bad"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter1")}
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter1")}
              
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Very Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter1")}
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Excellent"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter1")}
            />
            Excellent
          </label>
        </fieldset>
        

        <fieldset>
          <p className="pform">Have an additional question or comment?</p>
          <textarea
            id="comments"
            name="comments"
            placeholder="Your answer"
            className="input-textarea"
            defaultValue={""}
            onChange={(e) => handleChange(e, "message")}
            value={data.message}
          />
        </fieldset>
        <fieldset>
          <p className="pform">Teaching Methodology</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"  
              defaultValue="Bad"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter2")}
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter2")}
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Very Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter2")}
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Excellent"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter2")}
            />
            Excellent
          </label>
        </fieldset>
        <fieldset>
          <p className="pform">Communication Skills</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="Bad"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter3")}
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter3")}
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Very Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter3")}
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Excellent"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter3")}

            />
            Excellent
          </label>


        </fieldset>

        <fieldset>
          <p className="pform">Punctuality</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="Bad"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter4")}
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter4")}
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Very Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter4")}
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Excellent"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter4")}
            />
            Excellent
          </label>
        </fieldset>

        <fieldset>
          <p className="pform">Overall Rating</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="Bad"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter5")}
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input

              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter5")}
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Very Good"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter5")}
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="Excellent"
              className="input-radio"
              onChange={(e) => handleChange(e, "parameter5")}
            />
            Excellent
          </label>
        </fieldset>
        

        <fieldset>
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default AddFeedback;
