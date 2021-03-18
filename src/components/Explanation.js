import React from 'react';
import styled from 'styled-components'

const StyledExplanation = styled.p`
    margin: 2% 2%;
    width:75%;
    text-align:center;
`;

function Explanation(props) {
    const {data} = props
    return (
        // <StyledExplanation>{data.explanation}</StyledExplanation>
        <StyledExplanation>{data.explanation}</StyledExplanation>
    )
}

export default Explanation;