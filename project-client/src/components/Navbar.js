import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
    width: "150px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    alignItems: "center",
  };

  const navStyle = {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

function Navbar() {
    return (
        <div >
            <nav style={navStyle}>
                <NavLink to="/"
               
                style={linkStyles}
               
                >
                 Home
                </NavLink>
                <NavLink to="/fun_facts"
               
                style={linkStyles}
               
                >
                 Fun Facts
                </NavLink>
                <NavLink to="/quotes"
              
                style={linkStyles}
               
                >
                 Quotes
                </NavLink>
                <NavLink to="/add_philosopher"
              
              style={linkStyles}
             
              >
               Add Philosopher
              </NavLink>
                </nav>
        </div>
    )
}

export default Navbar;