import "./Navbar.css";

function Navbar({isLogin, setIsLogin}){
    return <div className="nav-bar">
              <div className='logo'>
                <h1 className>KOLSRI</h1>
              </div>
              <div className="menus">
                <a href="#">About</a>
                <a href="#">Profile</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
                {
                  isLogin && <button onClick={()=>{
                    setIsLogin(false)
                  }}>Logout</button>
                }
              </div>
          </div>
}

export default Navbar;