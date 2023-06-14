import React, { useEffect, useState } from "react";
import Header from "./Header";
import {Routes, Route } from 'react-router-dom';
import PhilosopherCard from "./PhilosopherCard";
import Dropdown from "./Dropdown";
import FunFacts from "./FunFacts";
import AddPhilosopher from "./AddPhilosopher";
import Navbar from "./Navbar";
import Quotes from "./Quotes";


const thisUser = "avidThinker"

const secondHeaderStyle = {
  display: "grid",
  placeItems: "center",
  fontSize: "150%",
  backgroundColor: "#add8e6",
}

const divStyle = {
  padding: "10px"
}

const divStyleNew = {
  padding: "10px",
  backgroundColor: "#add8e6",
}

function App() {
const [philosophers, setPhilosophers] = useState([])

const [selected, setSelected] = useState("Diogenes")


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

function handleAddFact(philosopher, newFact) {
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
  setPhilosophers(philosophers.map((philo) => {
    
    if (philo === philosopher) {
      return {
        ...philosopher,
        fun_facts: [...philosopher.fun_facts, data]
      }} else {
        return philo
      }
    
  }))
   
})

  

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
      setSelected(philosopher.name)
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
    <p style={secondHeaderStyle}>Choose A Philosopher From The Dropdown Menu</p>
    <Dropdown philosophers={philosophers} setSelected={setSelected} /> 
      <Routes>
        <Route path="/*" element={ 
        <>
        <Navbar />
        <Header />  
       {philosophers.length > 0 && <PhilosopherCard philosopher={philosophers.find((philosopher) => philosopher.name === selected)} />}
       <div style={divStyle}></div>
        </>
        }/>
           
        <Route path="/fun_facts/*" element={
        <> 
        <Navbar />
        <p style={secondHeaderStyle}><strong>Know Something Interesting About This Philosopher? Add A Fun Fact!</strong></p>
        {philosophers.length > 0 && <FunFacts handleAddFact={handleAddFact} philosopher={philosophers.find((philosopher) => philosopher.name === selected)} thisUser={thisUser} handleDeleteFact={handleDeleteFact} handleUpdateFact={handleUpdateFact} />}
        <div style={divStyleNew}></div>
        </>
        }/>
          
        <Route path="/quotes/*" element={
        <>
        <Navbar />
        <p style={secondHeaderStyle}>Scroll Down To See Some Famous Quotes</p>
        <p style={secondHeaderStyle}>A Particular Quote Sparked Some Thoughts? Leave A Comment Under That Quote!</p>
        {philosophers.length > 0 && <Quotes philosopher={philosophers.find((philosopher) => philosopher.name === selected)} thisUser={thisUser} selected={selected} />} 
        <div style={divStyle}></div>
        </>
        }/>
       
        <Route path="/add_philosopher/*" element={ 
        <>
         <Navbar />
        <p style={secondHeaderStyle}>Here You Can Add A New Philosopher</p>
        <p style={secondHeaderStyle}><strong>They must be GREEK</strong></p>
        <p style={secondHeaderStyle}>Click The Add Philosopher Button, Once Added, They Will Appear In The Dropdown Menu</p>
        <AddPhilosopher handleAddPhilosopher={handleAddPhilosopher} setSelected={setSelected}/>
        <div style={divStyle}></div>
        </> 
        }/>

      </Routes>
      
      {/* <button onClick={consoleLog}>console.log</button> */}
    
    </div>
  );
}

export default App;
