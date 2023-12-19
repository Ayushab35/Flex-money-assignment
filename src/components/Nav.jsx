import React from "react";
import "../styles/nav.css";

const Nav = () =>{
    return (
        <nav id="navbar">       
        {/* <button class="open-menu-btn">
            <span class="material-symbols-outlined">menu</span>
        </button> */}
        
        <ul class="item-wrapper">
            <div class="stroke"></div>

            <li class="item home">
            <a href="/">
                <b>FlexBody</b>
            </a>
            </li>
            <li class="item">
            <a href="/about">
                About
            </a>
            </li>
            <li class="item">
            <a href="/classes">
                Classes
            </a>
            </li>
            <li class="item">
            <a href="/login">
                Login
            </a>
            </li>
        </ul>
        </nav>
    );
}

export default Nav;