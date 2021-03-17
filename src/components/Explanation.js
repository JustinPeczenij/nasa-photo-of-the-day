import React from 'react';

function Explanation(props) {
    const {data} = props
    return (
        <p>{data.explanation}</p>
    )
}

export default Explanation;