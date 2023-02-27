import { Link } from "react-router-dom";



export default function Nav () {
    return (
        <div className="navbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/paintings">Find a Painting</Link>
            <Link className="links" to="/favoritepaintings">My Favorites</Link>
            <h1></h1>
        </div>
    )
}