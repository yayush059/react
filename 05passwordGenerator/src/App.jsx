import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str = str + "0123456789"
    }
    if(characterAllowed){
      str += "!@#$%^&*"
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  } ,[length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  // const handleClick = () => {
  //   copyPasswordToClipboard
  //   alert("copied")
  // }
  
  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 my-40 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='bg-blue-500 px-3 text-white outline-none py-0.5 shrink-0'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2 py-1'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={36}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>  
        </div>
      </div>
    </>
  )
}

export default App
