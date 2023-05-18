import {NavLink} from "react-router-dom"

function NavBar(){
return(
    <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <p> | </p>
        <NavLink to="/add_song">Add Song</NavLink>
        <p> | </p>
        <NavLink to="/search">Search</NavLink>
    </nav>
)
}
export default NavBar