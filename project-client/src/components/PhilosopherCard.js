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
}
function PhilosopherCard({ philosopher, quotes, thisUser, selected, origin }) {

      
    

    const displayQuotes = quotes.map((quote) => {
        return (
            <>
            <div>
            <p key={quote.id} style={quoteStyle}>"{quote.quote}"</p>
            </div>

            <Comment quote={quote} thisUser={thisUser} selected={selected}/>
            </>
        )
    })

    return (
        <div key={philosopher.id} style={cardStyle}>
            <p style={quoteStyle}>{philosopher.name} of {origin ? origin.name : ''}</p>

            <img src={philosopher.img} alt={philosopher.name} style={imgStyle}></img>

            {displayQuotes}
        </div>
    )
}

export default PhilosopherCard;