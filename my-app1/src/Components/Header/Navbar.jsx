import "./Navbar.css";

function Navbar(){
    return <div className="nav-bar">
        <div className='logo'>
        <h1 className>GeekSter</h1>
      </div>
      <div className="menus">
        <a href="#">About</a>
        <a href="#">Profile</a>
        <a href="#">Contact</a>
        <a href="#">Help</a>
      </div>
    </div>
}

export default Navbar;