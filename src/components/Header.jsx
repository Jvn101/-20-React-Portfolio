import React, { useState } from 'react';
import Navigation from "./navigation";
import About from "./About";
import Contact from "./Contact";


function Header( {setCurrentPage}) {





return (
    <div>
        <nav>
            <h4 onClick={()=> setCurrentPage("About")}>About</h4>
            <h4 onClick={()=> setCurrentPage("Work")}>Work</h4>
            <h4 onClick={()=> setCurrentPage("Contact")}>Contact</h4>
        </nav>
    </div>
  );

}
export default Header;