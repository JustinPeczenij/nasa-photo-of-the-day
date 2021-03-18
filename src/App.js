import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Photo from './components/Photo'
import Title from './components/Title'
import Date from './components/Date'
import Explanation from './components/Explanation'
import Header from './components/Header'
import styled from 'styled-components'

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

  const DivContainer = styled.div`
    display:flex;
    justify-content:space-around;
  `;

  const InfoContainer = styled.div`
    width:45%;
    display:flex;
    flex-direction:column;
    align-items:center;
  `;

  return (
    <div className="App">
      <Header />
      <DivContainer>
        <div style={{width:'45%'}}>
          <Photo data={data} />
        </div> 
        <InfoContainer>  
          <Title data={data} />
          <Date data={data} />
          <Explanation data={data} />
        </InfoContainer>
      </DivContainer>
    </div>
  );
}

export default App;
