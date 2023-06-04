import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faUser, faRecycle } from '@fortawesome/free-solid-svg-icons'
import "./Features.css";

export const Features = (props) => {
  return (
    <div className='features'>
        <div className='feature-icon1'>
            <div className='feature-icon'>
                <FontAwesomeIcon icon={faDesktop} style={{padding:"10px",color:"#fff"}} />
            </div>
            <div className='feature-content'>
                <h4>Fully Resposive</h4>
                <p>Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.</p>
                <a href='#'>Read More</a>
            </div>
        </div>
        <div className='feature-icon1'>
            <div className='feature-icon'>
                <FontAwesomeIcon icon={faUser} style={{padding:"10px",color:"#fff"}}/>
            </div>
            <div className='feature-content'>
                <h4>Fully Resposive</h4>
                <p>Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.</p>
                <a href='#'>Read More</a>
            </div>
        </div>
        <div className='feature-icon1'>
            <div className='feature-icon'>
                <FontAwesomeIcon icon={faRecycle} style={{padding:"10px",color:"#fff"}} />
            </div>
            <div className='feature-content'>
                <h4>Fully Resposive</h4>
                <p>Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.</p>
                <a href='#'>Read More</a>
            </div>
        </div>
        
    </div>
  )
}
