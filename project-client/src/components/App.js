import React, { useEffect, useState } from "react";
import Header from "./Header";

import PhilosopherCard from "./PhilosopherCard";
import Dropdown from "./Dropdown";


const user = { username: "AvidThinker"}

function App() {
const [philosophers, setPhilosophers] = useState([])
const [philosopher, setPhilosopher] = useState({})
const [selected, setSelected] = useState("Diogenes")
const [quotes, setQuotes] = useState([])


useEffect(() => {
  fetch(`http://localhost:9292/philosophers`)
  .then((r) => r.json())
  .then((data) => {
    setPhilosophers(data)    
  })
  
}, [])


useEffect(() => {
  fetch(`http://localhost:9292/philosophers/${selected}`)
  .then(r => r.json())
  .then((data) => {
    setPhilosopher(data)
})
}, [selected])

useEffect(() => {
  fetch(`http://localhost:9292/quotes/${philosopher.id}`)
  .then(r => r.json())
  .then((data) => setQuotes(data))
}, [philosopher])



function consoleLog() {
  console.log(philosophers)
  console.log(philosopher)
  console.log(quotes)
}

// useEffect(() => {
//   fetch("http://localhost:9292/quotes")
//   .then((r) => r.json())
//   .then((quotes) => setQuotes(quotes))
// }, [])


  return (
    <div className="App">
      <Header />
      <button onClick={consoleLog}>console.log</button>
      <Dropdown   philosophers={philosophers} setSelected={setSelected} philosopher={philosopher}/>
      
      
      <PhilosopherCard philosopher={philosopher} quotes={quotes} />
    
    </div>
  );
}

export default App;
