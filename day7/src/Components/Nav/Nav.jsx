import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';


function Nav(prop){
    return <div className="nav-bar">
    <div className='left-nav'>
        <h2 className><FontAwesomeIcon icon={faFeatherPointed} /> Hootsuite</h2>
        <a href="#">Platform</a>
        <a href="#">Plans</a>
        <a href="#">Enterprice</a>
        <a href="#">Resources</a>
        <a href="#">Education</a>
    </div>
      <div className="right-nav">
        <a href="#">Contact Us</a>
        <a href="#">Log In</a>
        <button className="signup">Sign Up</button>
      </div>
    </div>
}

export default Nav;