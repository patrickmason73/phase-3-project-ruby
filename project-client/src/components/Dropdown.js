import React from "react";

const dropStyle = {
    display: "grid",
    placeItems: "center",
    paddingBottom: "10px",
}

const selectStyle = {
    fontSize: "140%", 
    backgroundColor: "DodgerBlue",
    color: "#FFFFFF"
}
function Dropdown({ setSelected, philosophers }) {
    
    const philosopherNames = philosophers.map((philosopher) => {
        return philosopher.name
    })

    function onChange(e) {
        setSelected(e.target.value)    
            }
          






return (
    <div style={dropStyle}>
    <select style={selectStyle} onChange={e => onChange(e)}>
        {philosopherNames.map((p) => (
            <option key={p} value={p}>{p}</option>
            ))}
        {/* <option value="Diogenes">Diogenes</option>
        <option value="Socrates">Socrates</option>
        <option value="Plato">Plato</option> */}
    </select>
    </div>
)

}

export default Dropdown;

