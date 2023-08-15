import React from "react";
import "./styles/feedback.css";

const Feedback = () => {
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
      <form id="survey=-form">
        {/* <fieldset>
          <label id="name_and_surname-label" htmlFor="name_and_surname">
            Name of the Teacher
          </label>
          <input
            id="name_and_surname"
            type="text"
            placeholder="Your answer"
            required=""
            className="form-control"
          />
        </fieldset> */}
        <fieldset>
          <label id="name_and_surname-label" htmlFor="name_and_surname">
            Select Teacher 
          </label>
        <select id="teacher" name="teacher" >
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            
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
          />
        </fieldset>

        <fieldset>
          <p className="pform">Practical Implementation</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="facebook"
              className="input-radio"
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="twitter"
              className="input-radio"
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Excellent
          </label>
        </fieldset>
        <fieldset>
          <p className="pform">All topic cover</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="facebook"
              className="input-radio"
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="twitter"
              className="input-radio"
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Excellent
          </label>
        </fieldset>
        <fieldset>
          <p className="pform">UNderstanding</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="facebook"
              className="input-radio"
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="twitter"
              className="input-radio"
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Excellent
          </label>
        </fieldset>
        <fieldset>
          <p className="pform">Clear and loud</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="facebook"
              className="input-radio"
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="twitter"
              className="input-radio"
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Excellent
          </label>
        </fieldset>
        <fieldset>
          <p className="pform">Aggregate</p>
          <label htmlFor="facebook-ad">
            <input
              type="radio"
              name="ad"
              id="facebook-ad"
              defaultValue="facebook"
              className="input-radio"
            />
            Bad
          </label>
          <label htmlFor="twitter-ad">
            <input
              type="radio"
              name="ad"
              id="twitter-ad"
              defaultValue="twitter"
              className="input-radio"
            />
            Good
          </label>
          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
            />
            Very Good
          </label>

          <label htmlFor="youtube-ad">
            <input
              type="radio"
              name="ad"
              id="youtube-ad"
              defaultValue="youtube"
              className="input-radio"
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
          />
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

export default Feedback;
