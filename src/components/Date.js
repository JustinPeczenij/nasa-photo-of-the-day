import React from 'react'

function Date(props) {
    const { data } = props;
    return(
        <h2>{data.date}</h2>
    )
}

export default Date