import React, { useState, useEffect } from "react";
import "./styles/events.css";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const fetchpic = (pic) => {
    if(pic){
        return "http://localhost:8080/api/events/event/image/"+pic
    }
    else{
        return "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
    }
}

  const fetchdata = async () => {
    const response = await axios.get("http://localhost:8080/api/events/events");
    setEvents(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="content-wrapper">
      {
                  events.map((item) => {
                    return (
                      <>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={fetchpic(item.eventImage)}
            alt=""
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">{item.eventsTitle}</h2>
            <div className="news-card__post-date">{item.eventsDate}</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
               {item.eventsDescription}
              </p>
              
            </div>
          </div>
        </div>
        </>
        );
      })
    }
      </div>
    </>
  );
};

export default Events;
