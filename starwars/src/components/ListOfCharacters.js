import React from 'react';
import styled from "styled-components";

const ListOfCharacters = ( { character } ) => {

    return (

    <div>
        <h2>Name: {character.name} </h2>
        <p>Gender: {character.gender} </p>
        <p>Eye Color: {character.eye_color} </p>
        <p>Hair Color: {character.hair_color} </p>
        <p>Skin Color: {character.skin_color} </p>
        <p>Height: {character.height} </p>
        <p>Mass: {character.mass} </p>
        <p>Birth Year: {character.birth_year} </p>
        <p>Homeworld: {character.homeworld} </p>
        <p>Films: {character.films} </p>
        <p>Vehicles: {character.vehicles}</p>
        <p>Starships: {character.starships} </p>
        <p>Species: {character.species} </p>

    </div>

    )

}

export default ListOfCharacters;