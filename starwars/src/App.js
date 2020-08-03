import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import styled from "styled-components";

//Styling
const AppContainer = styled.div`
      position: fixed;
      text-align: center;
      z-index: 9999;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
`;

//Declaring the Component
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios.get("https://swapi.dev/api/people/")

    .then(response => {
      // console.log('Yay you got the data from the API!', response.data.results);
      setCharacters(response.data.results);
    })

    .catch(error => {
      console.log('You have error message here', error)
    })

  }, []);

  //Use of Promise.all
  Promise.all([characters])
  .then(values => { 
  console.log('Promise Character MADE', values);
  })
  .catch(error => { 
  console.error('Promise Character ERROR', error.message)
  });





  return (
    <div>
    <AppContainer>
      <h1 className="Header">Characters</h1>
      </AppContainer>
      <div>
      <Character characters={characters}/>
      </div>
      </div>
  
  );
}

export default App;
