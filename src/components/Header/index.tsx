
import React, { FC, useContext, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from "react-router-dom";
import "./style.scss";


const Header:FC =() => {
    const [open, setOpen] = useState<boolean>(false);
    const menuToggle =()=>{
        setOpen(!open)
        if(open){
            document.body.style.overflowX = "hidden"
        }
        else{

        }
        
    }
  return (
    <header>
    <div className="container">
        <div className="picblock">
            <img src={logo} alt=""/>
        </div>
        <nav className={open ? "menu active" : "menu"}>
            <ul className="menuItems">
                <li className="menuItem"><Link className="menuLink" onClick={menuToggle} to={"/characters"}>Character</Link></li>
                <li className="menuItem"><Link className="menuLink" onClick={menuToggle} to={"/locations"}>Locations</Link></li>
                <li className="menuItem"><Link className="menuLink" onClick={menuToggle} to={"/episodes"}>Episodes</Link></li>
            </ul>
            <div className="menuBtn" onClick={menuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
</header>
  )
}

export default Header;