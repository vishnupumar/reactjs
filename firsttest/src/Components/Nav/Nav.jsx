import React from "react";
import "./Nav.css"

const Nav = () =>{
    return <div className="nav-bar">
        <div className="nav-logo">
            <h2>Flex Business Pro</h2>
            <p>Clean and Modern Business Theme</p>
        </div>
        <div className="nav-menus">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Styleguide</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
}

export default Nav;