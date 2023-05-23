import React, {useState} from "react";
import Comment from "./Comment";


function PhilosopherCard({ philosopher, quotes, thisUser, selected }) {

    


    const displayQuotes = quotes.map((quote) => {
        return (
            <>
            <p key={quote.id}>"{quote.quote}"</p>
            <Comment key={indexedDB} quote={quote} thisUser={thisUser} selected={selected}/>
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