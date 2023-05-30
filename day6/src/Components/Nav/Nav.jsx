import "./Nav.css";

function Nav(){
    return (
        <div className="nav-bar">
            <div className="logo"><h3>Logo</h3></div>
            <div className="menus">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Order</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Nav;