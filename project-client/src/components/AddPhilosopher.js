import React, {useState} from "react";


const fullStyle = {
    backgroundColor: "#C0C0C0",
    paddingTop: "10px",
    paddingBottom: "13px",
}

function AddPhilosopher({ handleAddPhilosopher }) {

const origins = ["Athens", "Stagira", "Elea"]
const eras = ["Ancient Greek", "Pre-Socratic"]

const [adding, setAdding] = useState(false)
const [name, setName] = useState("Diogenes")
const [origin_id, setOrigin_id] = useState(82)
const [era_id, setEra_id] = useState(23)
const [img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Diogenes-statue-Sinop-enhanced.jpg/220px-Diogenes-statue-Sinop-enhanced.jpg")
   
function handleSubmit(e) {
    e.preventDefault()
    handleAddPhilosopher({
        name,
        origin_id,
        era_id,
        img,
    })
}

function handleOriginChange(e) {
    if (e.target.value === "Athens") {
        setOrigin_id(82)
    }

    else if(e.target.value === "Stagira") {
        setOrigin_id(83)
    }

    else {setOrigin_id(84)}
}

function handleEraChange(e) {
    if (e.target.value === "Ancient Greek") {
        setEra_id(23)
    }
    else {setEra_id(24)}
}

    return (
        
        <div style={fullStyle}>
            <button onClick={() => setAdding(current => !current)}>{adding ? "CANCEL" : "+"}</button>
            { adding ? (
            <>
            <h1>ADD A PHILOSOPHER</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <label>NAME: </label>
                <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </fieldset>
                <fieldset>
                <label>Origin: </label>
                <select onChange={(e) => handleOriginChange(e)}>
                    {origins.map((origin) => (
                        <option key={origin} value={origin}>{origin}</option>
                        ))}
                </select>
                </fieldset>
                <fieldset>
                <label>Era: </label>
                <select onChange={(e) => handleEraChange(e)}>
                        {eras.map((era) => (
                        <option key={era} value={era}>{era}</option>
                        ))}
                </select>
                </fieldset>
                <fieldset>
                <label>IMAGE URL: </label>
                <input 
                type="text"
                name="img"
                id="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                />
                </fieldset>
                <button type="submit">ADD PHILOSOPHER</button>
            </form>
            </>)
            : null} 

        </div>
        
    )
}

export default AddPhilosopher