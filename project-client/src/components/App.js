import React, { useEffect, useState } from "react";
import Header from "./Header";
import Quote from "./Quote";
import PhilosopherCard from "./PhilosopherCard";


const user = { username: "AvidThinker"}

function App() {
const [philosophers, setPhilosophers] = useState([])
// const [quotes, setQuotes] = useState([])


useEffect(() => {
  fetch(`http://localhost:9292/philosophers`)
  .then((r) => r.json())
  .then(philosophers => {
    setPhilosophers(philosophers)
    console.log(philosophers)
  })
  
}, [])

// useEffect(() => {
//   fetch("http://localhost:9292/quotes")
//   .then((r) => r.json())
//   .then((quotes) => setQuotes(quotes))
// }, [])


  return (
    <div className="App">
      <Header />
      <PhilosopherCard philosophers={philosophers}/>
    </div>
  );
}

export default App;
