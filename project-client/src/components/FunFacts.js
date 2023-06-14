import React, {useState} from "react";
import UpdateFunFact from "./UpdateFunFact";

const headerStyle = {
    fontSize: "150%",
    paddingTop: "10px",
    paddingBottom: "10px",
}

const header2Style = {
    padding: "1em",
    display: "grid",
    placeItems: "center",
    fontSize: "170%",
}

const factStyle = {
    paddingTop: "6px",
    paddingBottom: "6px",
}

const fullStyle = {
    backgroundColor: "#add8e6",
    paddingTop: "5px"
}

const imgStyle = {
    display: "block",
    margin: "0 auto",
    width: "40%",
    height: "70%",
    borderRadius: "8px",
    filter: "drop-shadow(8px 8px 10px black)"
}

function FunFacts({ philosopher, thisUser, handleDeleteFact, handleUpdateFact, handleAddFact }) {


const [editing, setEditing] = useState(false)

const [newFact, setNewFact] = useState("")

const {fun_facts} = philosopher

function handleDeleteClick(fact){
    fetch(`http://localhost:9292/fun_facts/${fact.id}`, {
        method: "DELETE",
    })
   handleDeleteFact(philosopher.id, fact.id)
}



const displayFunFacts = 
(fun_facts ? 
fun_facts.map((fact) => {
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
}) :  <p style={headerStyle}>No Fun Facts :(</p>)

function handleSubmit(e) {
    e.preventDefault()
    handleAddFact(philosopher, newFact)
    setNewFact("")
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
            <p style={header2Style}><strong>{philosopher.name} of {philosopher.origin ? philosopher.origin.name : 'Athens'}</strong></p>
            <img src={philosopher.img} alt={philosopher.name} style={imgStyle}></img>
        </div>
    )
    }


export default FunFacts