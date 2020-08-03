import React from 'react';
import styled from "styled-components";

const Image = styled.img`
    width: 30%;
    height: 30%;
`;


const Images = ( { image } ) => {

    return (
    
        <Image src={image}></Image>
    
    )
    
    }
    
    export default Images;