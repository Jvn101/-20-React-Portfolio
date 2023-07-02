import React, { useState } from 'react';
import Navigation from "./navigation";
import About from "./About";
import Contact from "./Contact";


function Header( {setCurrentPage}) {


return (
    <div className="headerbar">
        <h1>Jasmine</h1>
        <nav className="navbar">
            <ul>
            <li onClick={()=> setCurrentPage("About")}>About</li>
            <li onClick={()=> setCurrentPage("Work")}>Work</li>
            <li onClick={()=> setCurrentPage("Contact")}>Contact</li>
            </ul>
        </nav>
    </div>
  );


}
export default Header;