import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import Films from './Films';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Images from './Images';

//Styling
const CharacterCard = styled.div`
    margin: 10%;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 2.5%;
    overflow: hidden;
`;

const FirstCharacterColumn = styled.div`
    display: flex;
    column-gap: 50%;  
`;

const SecondCharacterColumn = styled.div`
`;

const ThirdCharacterColumn = styled.div`
    margin-left: 20%;
`;

const Par = styled.p`
   word-wrap: break-word; 
`;

//Declaring the Component
const ListOfCharacters = ( { character } ) => {

    //Homeworld API
    const [homeworld, setHomeworld] = useState([]);

    const homeworldURL = character.homeworld;
    
    useEffect(() => {
        axios.get(homeworldURL)
        .then(response => {
            // console.log(response.data.name);
            setHomeworld(response.data.name);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    //Species API
    const [species, setSpecies] = useState([]);

    const speciesdURL = character.species;
    
    useEffect(() => {
        axios.get(speciesdURL)
        .then(response => {
            // console.log(response.data.name);
            setSpecies(response.data.name);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    //Films API
    const [films, setFilms] = useState([]);

    const filmsURL = character.films;

    useEffect(() => {
       
        {filmsURL.forEach(item => {
           
            axios.get(item)
            .then(response => {
                // console.log('films success here', response.data);
                films.push(response.data.title);
                // console.log(films);
    
            })
            .catch(error => {
                console.log('films error here', error);
            })


        })}

    }, []);

    //Vehicles API
    const [vehicles, setVehicles] = useState([]);

    const vehiclesURL = character.vehicles;

    useEffect(() => {
       
        {vehiclesURL.forEach(item => {
           
            axios.get(item)
            .then(response => {
                // console.log('films success here', response.data);
                vehicles.push(response.data.name);
                // console.log(vehicles);
    
            })
            .catch(error => {
                console.log('films error here', error);
            })

        })}

    }, []);

    //Starships API
    const [starships, setStarships] = useState([]);

    const starshipsURL = character.starships;

    useEffect(() => {
       
        {starshipsURL.forEach(item => {
           
            axios.get(item)
            .then(response => {
                // console.log('films success here', response.data);
                starships.push(response.data.name);
                // console.log(starships);
    
            })
            .catch(error => {
                console.log('films error here', error);
            })


        })}

    }, []);

    //Use of Promise.All
    Promise.all([homeworld, films, starships, species, vehicles])
    .then(values => { 
    console.log('Promise MADE', values);
    })
    .catch(error => { 
    console.error('Promise ERROR', error.message)
    });

    const images = [
        './images/lukesw.jpg',
        './images/c3posw.jpg',
        './images/r2d2sw.jpg',
        './images/darthsw.jpg',
        './images/leiasw.jpg',
        './images/owensw.jpg',
        './images/berusw.jpg',
        './images/r5d4sw.jpg',
        './images/biggssw.jpg',
        './images/obisw.jpg'
    ];

    return (

    <CharacterCard>
        <h2>Name: {character.name} </h2>

        {images.forEach((image, index) => {
            return  <Images key={index} src={image} />
        })}

        <FirstCharacterColumn>
        <SecondCharacterColumn>
        <Par>Gender: {character.gender} </Par>
        <Par>Eye Color: {character.eye_color} </Par>
        <Par>Hair Color: {character.hair_color} </Par>
        <Par>Skin Color: {character.skin_color} </Par>
        <Par>Height: {character.height} </Par>
        <Par>Mass: {character.mass} </Par>
        </SecondCharacterColumn>
        <ThirdCharacterColumn>
        <Par>Birth Year: {character.birth_year} </Par>
        <Par>Homeworld: {homeworld} </Par>

        {films.map((film, index) => {
            return  <Films key={index} film={film} />
        })}

        {vehicles.map((vehicle, index) => {
            return  <Vehicles key={index} vehicle={vehicle} />
        })}

        {starships.map((starship, index) => {
            return  <Starships key={index} starship={starship} />
        })}
       
        <Par>Species: {species} </Par>
        </ThirdCharacterColumn>
        </FirstCharacterColumn>

    </CharacterCard>

    )

}

export default ListOfCharacters;