import React from 'react'
import "./Achivements.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy ,faBriefcase, faCar, faT} from '@fortawesome/free-solid-svg-icons'

export const Achivements = () => {
  return (
    <div className='achivements'>
        <div className='achivement-1'>
            <FontAwesomeIcon icon={faTrophy} style={{color:"#fff",fontSize:"2rem"}}/>
            <h1>22</h1>
            <p>Awards Winning</p>
        </div>
        <div className='achivement-1'>
            <FontAwesomeIcon icon={faBriefcase} style={{color:"#fff",fontSize:"2rem"}}/>
            <h1>145</h1>
            <p>Finished Projects</p>
        </div>
        <div className='achivement-1'>
            <FontAwesomeIcon icon={faCar} style={{color:"#fff",fontSize:"2rem"}}/>
            <h1>349</h1>
            <p>Products Sold</p>
        </div>
        <div className='achivement-1'>
            <i class="fa-brands fa-twitter" style={{color:"#fff",fontSize:"2rem"}}></i>
            <h1>2456</h1>
            <p>Twitter Fans</p>
        </div>
    </div>
  )
}
