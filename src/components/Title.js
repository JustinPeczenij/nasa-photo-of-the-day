import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
    font-size: 3rem;
    margin-bottom: 0;
`;

function Title(props) {
    const { data } = props;
    if (!data) return <h3>Loading...</h3>
    return(
        // <StyledTitle>{data.title}</StyledTitle>
        <StyledTitle>{data.title}</StyledTitle>
    )
}

export default Title