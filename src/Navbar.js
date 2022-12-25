import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>3c Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create New Artical</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;