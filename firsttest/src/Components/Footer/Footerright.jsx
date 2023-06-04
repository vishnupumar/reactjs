import React from 'react'
import "./Footerright.css";

export const Footerright = ({image}) => {
  return (
    <div className='footerright-image'>
        <img src={image} alt='gallery' width={75} height={75} />
    </div>
  )
}
