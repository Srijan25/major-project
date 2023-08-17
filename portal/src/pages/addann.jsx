import React, { useState, useEffect } from "react";
import "./styles/feedback.css";
import axios from "axios";


const AddAnn = () => {
    return (
        <>
      <header>
        <h1 id="title" className="text-center">
         Add Announcments
        </h1>
        
      </header>
      <form id="survey=-form">
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