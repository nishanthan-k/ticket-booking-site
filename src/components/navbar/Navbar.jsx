import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <nav className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar