import React, {useState} from "react";
import Comment from "./Comment";


function PhilosopherCard({ philosopher, quotes }) {

    const displayQuotes = quotes.map((quote) => {
        return (
            <>
            <p key={quote.id}>"{quote.quote}"</p>
            <Comment key={quote.id}/>
            </>
        )
    })

    return (
        <div>
            <img src={philosopher.img}></img>

            {displayQuotes}
        </div>
    )
}

export default PhilosopherCard;