import React, {useEffect} from "react";
import Comment from "./Comment";


function PhilosopherCard({ philosopher, quotes, thisUser, selected, origin }) {

      
    

    const displayQuotes = quotes.map((quote) => {
        return (
            <>
            <p key={quote.id}>"{quote.quote}"</p>
            <Comment quote={quote} thisUser={thisUser} selected={selected}/>
            </>
        )
    })

    return (
        <div key={philosopher.id}>
            <p>{philosopher.name} of {origin ? origin.name : ''}</p>

            <img src={philosopher.img}></img>

            {displayQuotes}
        </div>
    )
}

export default PhilosopherCard;