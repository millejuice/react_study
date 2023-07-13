import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let minutes;
let hours;
function App(){
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
      <h3> Super Converter</h3>
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


root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
