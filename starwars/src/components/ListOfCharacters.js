import React from 'react';
import styled from "styled-components";

const ListOfCharacters = ( { character } ) => {

    return (

    <div>
        <h2>Name: {character.name} </h2>
    </div>

    )

}

export default ListOfCharacters;