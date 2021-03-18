import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    margin-bottom: 10px;
    border-bottom: solid black 2px;
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    background-image: url('https://cdn.nextgov.com/media/img/upload/2020/10/19/NGspace20201019/860x394.jpg');
`;
const SmallDiv = styled.div`
    width: 15%;
`;

const Spinny = styled.img`
    width:20%;
    padding:5%;
    background-size: contain;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`;


const NameDiv = styled.a`
    width:15%;
    margin: 4px;
    font-size: 1rem;
    color: #dbdbdb;
`;

function Header() {
    return (
        <StyledHeader>
            <SmallDiv>
                <Spinny src='https://www.pinclipart.com/picdir/big/303-3038915_plant-it-bumbummeron-is-a-relatively-small-planet.png'></Spinny>
            </SmallDiv>
            <h1 style={{color:'white'}}>Nasa Astronomy Photo of the Day</h1>
            <NameDiv href='https://www.linkedin.com/in/justinpeczenij/' target='_blank'>By: Justin Peczenij</NameDiv>
        </StyledHeader>
    )
}

export default Header