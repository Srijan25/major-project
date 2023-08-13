import React from 'react'
import './styles/feedback.css'

const Feedback = () => {
    return (
        <>
        <header>
          <h1 id="title" className="text-center">
            Employment in The Delivery Team
          </h1>
          <p id="decription" className="text-center decription">
            Please fill out the form so we can contact you 😊
          </p>
        </header>
        <form id="survey=-form">
          <fieldset>
            <label id="name_and_surname-label" htmlFor="name_and_surname">
              Name and surname
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
            <label id="phone_number-label" htmlFor="phone_number">
              Phone number
            </label>
            <input
              id="phone_number"
              type="text"
              placeholder="Your answer"
              required=""
              className="form-control"
            />
          </fieldset>
          <fieldset>
            <p className="pform">Do you have your own vehicle?</p>
            <label htmlFor="own_vhicle-yes">
              <input
                type="radio"
                name="own_vhicle"
                id="own_vhicle-yes"
                defaultValue="yes"
                className="input-radio"
              />
              Yes
            </label>
            <label htmlFor="own_vhicle-no">
              <input
                type="radio"
                name="own_vhicle"
                id="own_vhicle-no"
                defaultValue="no"
                className="input-radio"
              />
              No
            </label>
          </fieldset>
          <fieldset>
            <p className="pform">Please select your vehicle type.</p>
            <label htmlFor="bicycle-vehicle_type">
              <input
                type="checkbox"
                name="vehicle_type"
                id="bicycle-vehicle_type"
                defaultValue="bicycle"
                className="input-checkbox"
              />
              Bicycle
            </label>
            <label htmlFor="motorcycle-vehicle_type">
              <input
                type="checkbox"
                name="vehicle_type"
                id="motorcycle-vehicle_type"
                defaultValue="motorcycle"
                className="input-checkbox"
              />
              Motorcycle
            </label>
            <label htmlFor="car-vehicle_type">
              <input
                type="checkbox"
                name="vehicle_type"
                id="car-vehicle_type"
                defaultValue="car"
                className="input-checkbox"
              />
              Car
            </label>
            <label htmlFor="i_don't_have_my_own_vehicle-vehicle_type">
              <input
                type="checkbox"
                name="vehicle_type"
                id="i_don't_have_my_own_vehicle-vehicle_type"
                defaultValue="i_don't_have_my_own_vehicle"
                className="input-checkbox"
              />
              I don't have my own vehicle
            </label>
          </fieldset>
          <fieldset>
            <p className="pform">Are you already working elsewhere?</p>
            <label htmlFor="already_working-yes">
              <input
                type="radio"
                name="already_working"
                id="already_working-yes"
                defaultValue="yes"
                className="input-radio"
              />
              Yes
            </label>
            <label htmlFor="already_working-no">
              <input
                type="radio"
                name="already_working"
                id="already_working-no"
                defaultValue="no"
                className="input-radio"
              />
              No
            </label>
          </fieldset>
          <fielset>
            <p className="pform">
              Having trouble working in different weather conditions?
            </p>
            <label htmlFor="weather_conditions-yes">
              <input
                type="radio"
                name="weather_conditions"
                id="weather_conditions-yes"
                defaultValue="yes"
                className="input-radio"
              />
              Yes
            </label>
            <label htmlFor="weather_conditions-no">
              <input
                type="radio"
                name="weather_conditions"
                id="weather_conditions-no"
                defaultValue="no"
                className="input-radio"
              />
              No
            </label>
            <fieldset>
              <p className="pform">
                I agree to Click Eat to use my personal data and store it in the
                database within 3 years.
              </p>
              <label htmlFor="personal_data-agree">
                <input
                  type="checkbox"
                  name="personal_data"
                  id="personal_data-agree"
                  defaultValue="agree"
                  className="input-checkbox"
                />
                I agree
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
              <p className="pform">How did you find out about this ad?</p>
              <label htmlFor="facebook-ad">
                <input
                  type="radio"
                  name="ad"
                  id="facebook-ad"
                  defaultValue="facebook"
                  className="input-radio"
                />
                Facebook
              </label>
              <label htmlFor="instagram-ad">
                <input
                  type="radio"
                  name="ad"
                  id="instagram-ad"
                  defaultValue="instagram"
                  className="input-radio"
                />
                Instagram
              </label>
              <label htmlFor="kariera.mk-ad">
                <input
                  type="radio"
                  name="ad"
                  id="kariera.mk-ad"
                  defaultValue="kariera.mk"
                  className="input-radio"
                />
                Kariera.mk
              </label>
              <label htmlFor="reklama5-ad">
                <input
                  type="radio"
                  name="ad"
                  id="reklama5-ad"
                  defaultValue="reklama5"
                  className="input-radio"
                />
                Reklama5
              </label>
              <label htmlFor="pazar3-ad">
                <input
                  type="radio"
                  name="ad"
                  id="pazar3-ad"
                  defaultValue="pazar3"
                  className="input-radio"
                />
                Pazar3
              </label>
              <label htmlFor="recommendation-ad">
                <input
                  type="radio"
                  name="ad"
                  id="recommendation-ad"
                  defaultValue="recommendation"
                  className="input-radio"
                />
                Friend/recommendation
              </label>
            </fieldset>
            <fieldset>
              <button type="submit" id="submit" className="submit-button">
                Submit
              </button>
            </fieldset>
            <footer>
              <label>Made By Bojan T.</label>
              <p className="pform">
                Template By <a href="freecodecamp.org">freecodecamp.org</a>
              </p>
            </footer>
          </fielset>
        </form>
      </>
      
    )
}

export default Feedback
