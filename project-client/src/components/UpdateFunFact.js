import React, {useState} from "react";

function UpdateFunFact({ fact, handleUpdateFact, setEditing }) {

const [factContent, setFactContent] = useState(fact.fact)

function handleSubmit(e) {
    e.preventDefault()
    handleUpdateFact(fact, factContent)
    setEditing(false)
}



return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="edit"
            autoComplete="off"
            value={factContent}
            onChange={(e) => setFactContent(e.target.value)}
            />
            <button type="submit">SAVE</button>
        </form>   
)
}
export default UpdateFunFact;