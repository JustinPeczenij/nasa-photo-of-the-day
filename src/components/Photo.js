import React from 'react'

function Photo(props) {
    const { data } = props;
    if (!data) return <h3>Loading...</h3>
    return(
        <img src={data.url} alt='astronomy picture of the day'/>
    )
}

export default Photo