import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
    background-image: url("../../public/background.jpeg");
`;

export default function Container (props) {
    return <StyledContainer {...props}>{props.children}</StyledContainer>;
}