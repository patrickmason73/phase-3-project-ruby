import React, {useState} from "react";
import UpdateFunFact from "./UpdateFunFact";

const headerStyle = {
    fontSize: "150%",
    paddingTop: "10px",
    paddingBottom: "10px",
}

const factStyle = {
    paddingTop: "6px",
    paddingBottom: "6px",
}

const fullStyle = {
    backgroundColor: "#add8e6"
}

function FunFacts({ philosopher, thisUser, handleDeleteFact, handleUpdateFact }) {


const [editing, setEditing] = useState(false)

const [newFact, setNewFact] = useState("")

const {fun_facts} = philosopher

function handleDeleteClick(fact){
    fetch(`http://localhost:9292/fun_facts/${fact.id}`, {
        method: "DELETE",
    })
   handleDeleteFact(philosopher.id, fact.id)
}



const displayFunFacts = fun_facts.map((fact) => {
    const currentUser = thisUser === fact.user 

  

    return (
        <div key={fact.id} style={factStyle}>
        <li >{fact.user}:  <strong>{fact.fact}</strong>
        {currentUser && editing ? (<UpdateFunFact handleUpdateFact={handleUpdateFact} fact={fact} setEditing={setEditing}/>) : null}
        {currentUser ? (
            <>
            <button onClick={() => handleDeleteClick(fact)}>Delete</button>
            <button onClick={() => setEditing(current => !current)}>{editing ? "CANCEL" : "EDIT"}</button>
            </>
        ): null}
        
        
        </li>
        
        </div>
    )
})

function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/fun_facts`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            fact: newFact,
            user: thisUser,
            philosopher_id: philosopher.id,
        }),
    })
    .then(r => r.json())
    .then((data) => {
        setNewFact("")
        fun_facts.push(data)
    })
}
    return (
        <div style={fullStyle}>
            <header style={headerStyle}><strong>Fun Facts About {philosopher.name} (Periodically Reviewed By Me)</strong></header>

             {displayFunFacts}

            <form onSubmit={handleSubmit}>
            <input
                    // style={postCommentStyle}
                    type="text"
                    name="newFact"
                    autoComplete="off"
                    value={newFact}
                    onChange={(e) => setNewFact(e.target.value)}
                />
                <button type="submit">SEND</button>
                <p>Show Me Your Knowledge!</p>
            </form>

        </div>
    )
    }


export default FunFacts