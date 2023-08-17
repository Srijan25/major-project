import React,{useState,useEffect} from "react";
import "./styles/feedback.css";
import axios from "axios";
import swal from 'sweetalert';

const AddEvent = () => {
    return (
        <>
        <header>
          <h1 id="title" className="text-center">
           Add Event
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
            <p className="pform">Description of Event</p>
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
                <label id="image-label" htmlFor="image">
                    Image
                </label>
                <input
                    id="image"
                    type="file"
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
  
    );

};

export default AddEvent;