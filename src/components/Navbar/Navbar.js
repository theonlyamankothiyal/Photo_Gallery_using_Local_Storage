import { Link } from "react-router-dom";
import "./navbarStyle.css";
import React, { useState } from 'react';
import { FaBars, FaFileImage, FaHome, FaSignOutAlt, FaTimes} from "react-icons/fa";


const Navbar = () => {

    // const user = useSelector(state => state.bag.user)
    const currentUser=JSON.parse(localStorage.getItem("currentUser"))

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Aetoreal </h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/display"><FaHome size={25} title="Home"
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>
                <li>
                    <Link to="/upload"> <FaFileImage size={25} title="Upload Image"
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>
                <li>
                    <Link to="/profile" title="User Profile"><h3>{currentUser.name}</h3></Link>
                </li>


                <li>
                    <Link to="/login"><FaSignOutAlt size={25} title="Logout"
                        style={{ color: "#fff", marginRight: "1rem" }} /></Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }
                } />) : (
                    <FaBars size={20} style={{ color: "#fff" }
                    } />)}

            </div>
        </div>
    )
}

export default Navbar;
