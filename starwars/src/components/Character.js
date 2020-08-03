import React from 'react';
import styled from "styled-components";
import ListofCharacters from './ListOfCharacters';

// Write your Character component here
const Character = ( { characters } ) => {

    return (

        <div>

            {characters.map((character, index) => {
                return <ListofCharacters key={index} character={character} />
            })}


        </div>
    )
}

export default Character;

