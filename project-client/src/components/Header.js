import React from "react";

const headerStyle = {
    display: "grid",
    placeItems: "center",
    fontSize: "200%"
}

const secondHeaderStyle = {
    display: "grid",
    placeItems: "center",
    fontSize: "150%",
    backgroundColor: "#add8e6",
}

function Header() {

    return (
        <>
        <p style={headerStyle}><strong>WELCOME TO MY GREEK PHILOSOPHER DATABASE</strong></p>
        <p style={secondHeaderStyle}>Choose A Philosopher From The Dropdown Menu, Scroll Down To See Their Quotes!</p>
        <p style={secondHeaderStyle}>If You Like Any Quotes, Feel Free To Leave A Comment!</p>
        <p style={secondHeaderStyle}>Know Something Interesting Or Fun About A Philosopher? Post A Fun Fact About Them!</p>
        <p style={secondHeaderStyle}>I Will Allow You To Add A New GREEK Philosopher To This Database, Click The + Sign</p>
        </>
    )
}

export default Header;
