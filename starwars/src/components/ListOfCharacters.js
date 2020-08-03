import React from 'react';
import styled from "styled-components";

const CharacterCard = styled.div`
    margin: 10%;
    background-color: black;
    color: white;
    padding: 2.5%;
    justify-content: center;
    align-items: center;

`;

const FirstCharacterColumn = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`;

const SecondCharacterColumn = styled.div`
    width: 50%;
    
`;

const ThirdCharacterColumn = styled.div`
    width: 50%%;
`;

const Par = styled.p`
    align-items: center;
    text-align: justify;
    display: flex;
    flex-wrap: wrap;
    align-content: space-evenly;
`;

const ListOfCharacters = ( { character } ) => {

    return (

    <CharacterCard>
        <h2>Name: {character.name} </h2>
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
        <Par>Homeworld: {character.homeworld} </Par>
        <Par>Films: {character.films} </Par>
        <Par>Vehicles: {character.vehicles}</Par>
        <Par>Starships: {character.starships} </Par>
        <Par>Species: {character.species} </Par>
        </ThirdCharacterColumn>
        </FirstCharacterColumn>

    </CharacterCard>

    )

}

export default ListOfCharacters;