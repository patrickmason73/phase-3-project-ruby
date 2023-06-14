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

        <p style={secondHeaderStyle}>Fun Facts Will Show You What Other Users Know About This Philosopher</p>
        <p style={secondHeaderStyle}>Check Out Some Famous Quotes By This Philosopher!</p>
        <p style={secondHeaderStyle}>Or Add A New GREEK Philosopher To The Database!</p>
        </>
    )
}

export default Header;
