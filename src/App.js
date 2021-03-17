import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Photo from './components/Photo'
import Title from './components/Title'
import Date from './components/Date'
import Explanation from './components/Explanation'



function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <Title data={data} />  
      <Photo data={data} />
      <Date data={data} />
      <Explanation data={data} />
    </div>
  );
}

export default App;
