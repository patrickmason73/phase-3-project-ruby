import React from "react";

const dropStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",  
}

function Dropdown({ philosophers, setSelected }) {
    


    function onChange(e) {
        setSelected(e.target.value)    
            }
          






return (
    <div style={dropStyle}>
    <select onChange={e => onChange(e)}>
        {philosophers.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
            ))}
        {/* <option value="Diogenes">Diogenes</option>
        <option value="Socrates">Socrates</option>
        <option value="Plato">Plato</option> */}
    </select>
    </div>
)

}

export default Dropdown;

