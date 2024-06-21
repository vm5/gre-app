import './App.css';
import React from "react";

function Header() {
    return (
        <header className="header">
            <h1>WELCOME TO GRE TESTING PORTAL (CONDUCTED BY ETS)</h1>
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/9/99/ETS_GRE_Logo.jpg"
                alt="GRE logo" 
                className="logo-img" 
            />
        </header>
    );
}

export default Header;
