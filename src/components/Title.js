import React from 'react'

function Title(props) {
    const { data } = props;
    if (!data) return <h3>Loading...</h3>
    return(
        <h1>{data.title}</h1>
    )
}

export default Title