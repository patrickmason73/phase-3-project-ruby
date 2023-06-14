import React from "react";


const cardStyle = {
        alignItems: "center",
        justifyContent: "center",  
}

const imgStyle = {
    display: "block",
    margin: "0 auto",
    width: "40%",
    height: "70%",
    borderRadius: "8px",
    filter: "drop-shadow(8px 8px 10px black)"
}


const headerStyle = {
    padding: "1em",
    display: "grid",
    placeItems: "center",
    fontSize: "170%",
}
function PhilosopherCard({ philosopher }) {

    const {id, name, origin, img} = philosopher
      
    return (
        <div key={id} style={cardStyle}>
            <p style={headerStyle}><strong>{name} of {origin ? origin.name : 'Athens'}</strong></p>

            <img src={img} alt={name} style={imgStyle}></img>

        </div>
    )
}

export default PhilosopherCard;