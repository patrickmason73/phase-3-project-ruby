import React, {useState, useEffect} from "react";
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
    borderRadius: "8px",
    filter: "drop-shadow(8px 8px 10px black)"
}

const quoteStyle = {
    padding: "1em",
    display: "grid",
    placeItems: "center",
    fontSize: "130%",
}
function PhilosopherCard({ philosopher, quotes, thisUser, selected, origin }) {

      const {id, name, origin_id, era_id, img} = philosopher
      

    const displayQuotes = quotes.map((quote) => {
        return (
            <div key={quote.id}>
            <p style={quoteStyle}><strong>"{quote.quote}"</strong></p>
            
            <Comment quote={quote} thisUser={thisUser} selected={selected} />
            </div>
        )
    })

    return (
        <div key={id} style={cardStyle}>
            <p style={quoteStyle}><strong>{name} of {origin ? origin.name : ''}</strong></p>

            <img src={philosopher.img} alt={philosopher.name} style={imgStyle}></img>

            {displayQuotes}
        </div>
    )
}

export default PhilosopherCard;