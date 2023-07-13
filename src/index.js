import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let minutes;
let hours;

function MinutesToHours(){
  const [minutes,setMinutes] = React.useState(0);
  const [flipped,setFlipped] = React.useState(false);
  const onChange=(event) =>{
    setMinutes(event.target.value);
  } 
  function reset(){
    setMinutes(0);
  }
  function onFlip(){
    setFlipped((current)=>!current);
  }
  return(
    <div>
      <label>Minutes</label>
      <input value = {flipped? minutes*60 : minutes}
      type = "number"
      id="minutes"
      onChange={onChange}
      disabled={flipped}
      ></input>
      <div>
      <label>Hours</label>
      <input value={flipped ? minutes : Math.round(minutes/60)}
      type='number'
      id='hours'
      onChange={onChange}
      disabled = {!flipped}
      ></input>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
      </div>
    </div>
  )
}

function KiloMToMm(){
 return (
 <h3>Kilometers To Milimeters</h3>
 )
}

function App(){
  const [index,setIndex] = React.useState("xx");
  function onSelect(event){
    setIndex(event.target.value);
  }
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your values</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilo & miles</option>
      </select>

      {index == "xx" ? "select your value" : null}
      {index == 0 ? <MinutesToHours /> : null}
      {index == 1 ? <KiloMToMm /> : null}
    </div>
  )
}
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
