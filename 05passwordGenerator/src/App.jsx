import { useState, useCallback, useEffect, useRef } from 'react'   //hooks

function App() {
  const [length, setLength] = useState(8)
  const [number, SetNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSRUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "$%&?*+-!~@"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  }, [length,number,character,setPassword])  //to optimize method

  const copyPasswordToClipboard = useCallback( ()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( ()=> {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])    // to re-run method 

  return (
   
     <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
     <h1 className='text-3xl text-center my-3'>Password Generator</h1>
    
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3'
        placeholder='password' readOnly
        ref={passwordRef} />
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={20} value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label htmlFor="">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="numberInput" defaultChecked={number} 
          onChange={() => {
            SetNumber((prev) => !prev);
          }}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="charInput" defaultChecked={character} 
          onChange={() => {
            setCharacter((prev) => !prev);
          }}/>
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
     </div>
    
   
  )
}

export default App
