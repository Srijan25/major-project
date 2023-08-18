import React,{useEffect,useState} from 'react';
import AutoScrollBox from './AutoScolledBox';
import './styles/ann.css';
import axios from 'axios';
const Ann = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8080/api/ann/view").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const paragraphs = [
    data.map((item) => {
      return (
        <>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.date.slice(0,10)}</p>
          <hr style={{ width: "100%", textAlign: "center", marginLeft: 5 }} />

        </>
      );
    }),
  ];

  return (
    <div className="ann">
      <h1>Announcments</h1>
      <AutoScrollBox paragraphs={paragraphs} />
    </div>
  );
};

export default Ann;
