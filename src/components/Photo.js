import React from 'react'
import styled from 'styled-components'


const ImgContainer = styled.div`
    margin: 5%;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
`;


function Photo(props) {
    const { data } = props;
    if (!data) return <h3>Loading...</h3>
    return(
        <ImgContainer>
            {/* <img src={data.url} alt='astronomy picture of the day'/> */}
            <img style={{width:'100%', height:'100%'}} src={data.url} alt='astronomy picture of the day'/>
        </ImgContainer>
    )
}

export default Photo