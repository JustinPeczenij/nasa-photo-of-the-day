import React from "react";
import Photo from './components/Photo'
import Title from './components/Title'

function PhotoData(props) {
    const { data } = props
    return (
        <div className='container'>
            <Title data={data} />
            <Photo data={data}/>
            <h2>{data.date}</h2>
            <p>{data.explanation}</p>
        </div>
    )

}

export default PhotoData;