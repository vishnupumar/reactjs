import React from 'react';
import "./Card.css"

const Card = ({image,number,title}) => {
  return (
        <div className='card'>
            <h1><img src={image} style={{width:"200px", height:"200px"}} /></h1>
            <h3>{number}</h3>
            <p>{title}</p>
        </div>
  )
}

export default Card