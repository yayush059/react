import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //hook important

  //let counter = 15;
  const addValue= () => {
    console.log("clicked", counter)
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue= () => {
    console.log("clicked", counter)
    counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
