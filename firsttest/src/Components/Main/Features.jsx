import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faUser, faRecycle } from '@fortawesome/free-solid-svg-icons'
import "./Features.css";
import { Icon } from './Icon';

export const Features = (props) => {
    const arr = [
        {
            h:"Fully Resposive",
            p:"Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.",
            icon: <FontAwesomeIcon icon={faDesktop} />,
            a:"READ MORE"
        },
        {
            h:"Fully Resposive",
            p:"Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.",
            icon: <FontAwesomeIcon icon={faUser} />,
            a:"READ MORE"
        },
        {
            h:"Fully Resposive",
            p:"Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.",
            icon: <FontAwesomeIcon icon={faRecycle} />,
            a:"READ MORE"
        }

    ]
  return (
    <div className='features'>
        {
            arr.map((ele)=>{
                return <Icon h={ele.h} p={ele.p} icon={ele.icon} a={ele.a} />
            })
        }
        
        {/* <div className='feature-icon1'>
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
        </div> */}
        {/* <div className='feature-icon1'>
            <div className='feature-icon'>
                <FontAwesomeIcon icon={faRecycle} style={{padding:"10px",color:"#fff"}} />
            </div>
            <div className='feature-content'>
                <h4>Fully Resposive</h4>
                <p>Eiusmod dolore minim mollit voluptate dolor nostrud consectetur Lorem nulla. Aliquip consequat minim.</p>
                <a href='#'>Read More</a>
            </div>
        </div> */}
        
    </div>
  )
}
