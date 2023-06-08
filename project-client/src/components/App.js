import React, { useEffect, useState } from "react";
import Header from "./Header";

import PhilosopherCard from "./PhilosopherCard";
import Dropdown from "./Dropdown";
import FunFacts from "./FunFacts";
import AddPhilosopher from "./AddPhilosopher";


const thisUser = "avidThinker"

const fullStyle = {
  paddingTop: "5px",
  paddingBottom: "5px"
}

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

function handleDeleteFact(philosopherId, factId) {
  const philosopherToUpdate = philosophers.find((philosopher) => philosopher.id === philosopherId)
  const upddatedPhilosophers = philosophers.map((philosopher) => {
    if (philosopher === philosopherToUpdate)
      return {
        ...philosopherToUpdate,
        fun_facts: philosopher.fun_facts.filter((fact) => {
          return fact.id !== factId
        })
      }
      else {return philosopher}
  })
  setPhilosophers(upddatedPhilosophers)
}

function handleUpdateFact(factToUpdate, formData) {
  const philosopherToUpdate = philosophers.find((philosopher) => philosopher.id === factToUpdate.philosopher_id)
  const philoFactToUpdate = philosopherToUpdate.fun_facts.find((fact) => fact.id === factToUpdate.id)
  fetch(`http://localhost:9292/fun_facts/${factToUpdate.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
      fact: formData,
    })
  })
  .then(r => r.json())
  .then((data) => {
    setPhilosophers(philosophers.map((philosopher) => {
      if (philosopher === philosopherToUpdate) {
        return {  
          ...philosopherToUpdate,
          fun_facts: philosopher.fun_facts.map((item) => {

            if (item === philoFactToUpdate) {

            return { ...philoFactToUpdate, fact: data.fact }; 
              }  else {
              return item;
            }
          })
          }}
        else {
          return philosopher
        }
    }))}
    )
    
console.log(philosopherToUpdate)
}

function handleAddPhilosopher(formData) {
  fetch(`http://localhost:9292/philosophers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(philosopher => {
      setPhilosophers([...philosophers, philosopher])
    })
}

// function consoleLog() {
//   console.log(philosophers)
//   // console.log(philosopher)
//   // console.log(quotes)
//   // console.log(origin.name)
// }


  return (
    <div className="App">
      <Header />
      {/* <button onClick={consoleLog}>console.log</button> */}

      <Dropdown philosophers={philosophers} setSelected={setSelected}/>
      
       <AddPhilosopher handleAddPhilosopher={handleAddPhilosopher}/>




     {philosophers.length > 0 && <FunFacts philosopher={philosophers.find((philosopher) => philosopher.name === selected)} thisUser={thisUser} handleDeleteFact={handleDeleteFact} handleUpdateFact={handleUpdateFact} />}



     
      
      
    {philosophers.length > 0 && <PhilosopherCard philosopher={philosophers.find((philosopher) => philosopher.name === selected)} thisUser={thisUser} selected={selected} />}
    
    </div>
  );
}

export default App;
