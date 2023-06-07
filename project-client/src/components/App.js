import React, { useEffect, useState } from "react";
import Header from "./Header";

import PhilosopherCard from "./PhilosopherCard";
import Dropdown from "./Dropdown";


const thisUser = "avidThinker"

function App() {
const [philosophers, setPhilosophers] = useState([])
// const [philosopher, setPhilosopher] = useState({
//   id: 1,
//   name: "Diogenes",
//   origin_id: 79,
//   era_id: 21,
//   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Diogenes-statue-Sinop-enhanced.jpg/220px-Diogenes-statue-Sinop-enhanced.jpg",
// })
const [selected, setSelected] = useState("Diogenes")
// const [quotes, setQuotes] = useState([])
// const [origin, setOrigin] = useState({
//   id: 79,
//   name: "Athens",
// })




useEffect(() => {
  fetch(`http://localhost:9292/philosophers`)
  .then((r) => r.json())
  .then((data) => {
    setPhilosophers(data)    
  })
  
}, [])


// useEffect(() => {
//   fetch(`http://localhost:9292/philosophers`)
//   .then(r => r.json())
//   .then((data) => {
//     setPhilosopher(data)
//     setQuotes(data.quotes)
//     setOrigin(data.origin)
// })
// }, [selected])

// useEffect(() => {
//   fetch(`http://localhost:9292/quotes/${philosopher.id}`)
//   .then(r => r.json())
//   .then((data) => setQuotes(data))
// }, [philosopher])

// useEffect(() => {
//   fetch(`http://localhost:9292/origins/${philosopher.origin_id}`)
//   .then(r => r.json())
//   .then((data) => setOrigin(data))
// }, [philosopher])



function consoleLog() {
  console.log(philosophers)
  // console.log(philosopher)
  // console.log(quotes)
  // console.log(origin.name)
}


  return (
    <div className="App">
      <Header />
      <button onClick={consoleLog}>console.log</button>
      <Dropdown   setSelected={setSelected}/>
      
      
    {philosophers.length > 0 && <PhilosopherCard philosopher={philosophers.find((philosopher) => philosopher.name === selected)} thisUser={thisUser} selected={selected} />}
    
    </div>
  );
}

export default App;
