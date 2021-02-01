import './App.css';
import React, { useState } from 'react'

function App() {

  const [characterAmountNumber, setCharacterAmountNumber] = useState();
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [mainPassword, setMainPassword] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    console.log(characterAmountNumber);
    console.log(uppercase);
    console.log(numbers);
    console.log(symbols);
    function array(low, high){
      const array = []
      for(let i=low;i<=high;i++){
        array.push(i);
      }
      return array;
    }
  
    const uppercharcodes = array(65,90);
    const lowercharcodes = array(97,122);
    const numbercharcode = array(48,57);
    const symbolscharcodes = array(33,47).concat(array(58,64)).concat(array(91,96)); 
  
    function generatePassword(characterAmountNumber, uppercase, numbers, symbols){
      let charcodes = lowercharcodes;
      if(uppercase) charcodes = charcodes.concat(uppercharcodes);
      if(numbers) charcodes = charcodes.concat(numbercharcode);
      if(symbols) charcodes = charcodes.concat(symbolscharcodes);
  
      const originalArray = []
      for(let i=0;i<characterAmountNumber;i++) {
        const character = charcodes[Math.floor(Math.random()*charcodes.length)];
        originalArray.push(String.fromCharCode(character));
      }
      return originalArray;
    }
  
    const password = generatePassword(characterAmountNumber, uppercase, numbers, symbols);
    setMainPassword(password);
  
  }
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Password Generator</h1>
        <h3 className='display'>{mainPassword}</h3>
        <form  className='form'>
          <label for='characterAmountNumber'>Number of Characters</label>
          <div className='amount'>
          <input onChange={(e)=>{setCharacterAmountNumber(e.target.value)}} type='range' min='1' max='50' value={characterAmountNumber} id='characterAmountRange'/>
          <input onChange={(e)=>{setCharacterAmountNumber(e.target.value)}} className='number' type='number' min='1' max='50' value={characterAmountNumber} id='characterAmountNumber'/>
          </div>
          <label for='includeUppercase'>Include Uppercase</label>
          <input onChange={e=>setUppercase(e.target.checked)}  type='checkbox' id='includeUppercase' />
          <label for='includeNumbers'>Include Numbers</label>
          <input onChange={e=>setNumbers(e.target.checked)} type='checkbox' id='includeNumbers'/>
          <label for='includeSymbols'>Include Symbols</label>
          <input onChange={e=>setSymbols(e.target.checked)} type='checkbox' id=' includeSymbols' />
          <button onClick={submit} className='btn' type='submit' >Generate Password</button>
        </form>
      </div>
    </div>
  );
}

export default App;
