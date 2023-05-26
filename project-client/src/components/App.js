import React, { useEffect, useState } from "react";
import Header from "./Header";

import PhilosopherCard from "./PhilosopherCard";
import Dropdown from "./Dropdown";


const thisUser = "avidThinker"

function App() {
const [philosophers, setPhilosophers] = useState([])
const [philosopher, setPhilosopher] = useState({})
const [selected, setSelected] = useState("Diogenes")
const [quotes, setQuotes] = useState([])
const [origin, setOrigin] = useState({
  id: 79,
  name: "Athens",
})



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

useEffect(() => {
  fetch(`http://localhost:9292/origins/${philosopher.origin_id}`)
  .then(r => r.json())
  .then((data) => setOrigin(data))
}, [philosopher])



// function consoleLog() {
//   console.log(philosophers)
//   console.log(philosopher)
//   console.log(quotes)
//   console.log(origin.name)
// }



  return (
    <div className="App">
      <Header />
      {/* <button onClick={consoleLog}>console.log</button> */}
      <Dropdown   philosophers={philosophers} setSelected={setSelected} philosopher={philosopher}/>
      
      
      <PhilosopherCard key={philosopher.id} philosopher={philosopher} quotes={quotes} thisUser={thisUser} selected={selected} origin={origin} />
    
    </div>
  );
}

export default App;
