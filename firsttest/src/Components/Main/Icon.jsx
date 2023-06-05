import React from 'react'
import "./Icon.css"

export const Icon = ({h,p,icon,a}) => {
  return (
    <div className='feature-icon1'>
            <div className='feature-icon'>
                {icon}
            </div>
            <div className='feature-content'>
                <h4>{h}</h4>
                <p>{p}</p>
                <a href='#'>{a}</a>
            </div>
        </div>
  )
}
