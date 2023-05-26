import React from "react";
import Comment from "./Comment";

const cardStyle = {
        alignItems: "center",
        justifyContent: "center",  
}

const imgStyle = {
    display: "block",
    margin: "0 auto",
    width: "40%",
    height: "70%",
}

const quoteStyle = {
    padding: "1em",
    display: "grid",
    placeItems: "center",
    fontSize: "130%",
}
function PhilosopherCard({ philosopher, quotes, thisUser, selected, origin }) {

      
    

    const displayQuotes = quotes.map((quote) => {
        return (
            <>
            <div>
            <p key={quote.id} style={quoteStyle}><strong>"{quote.quote}"</strong></p>
            

            <Comment quote={quote} thisUser={thisUser} selected={selected}/>
            </div>
            </>
        )
    })

    return (
        <div key={philosopher.id} style={cardStyle}>
            <p style={quoteStyle}><strong>{philosopher.name} of {origin ? origin.name : ''}</strong></p>

            <img src={philosopher.img} alt={philosopher.name} style={imgStyle}></img>

            {displayQuotes}
        </div>
    )
}

export default PhilosopherCard;