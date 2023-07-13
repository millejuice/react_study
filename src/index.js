import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let minutes;
let hours;
function App(){
  const [minutes,setMinutes] = React.useState();
  const onChange=(event) =>{
    setMinutes(event.target.value);
  } 
  return(
    <div>
      <h3> Super Converter</h3>
      <label>Minutes</label>
      <input value = {minutes}
      type = "number"
      id="minutes"
      onChange={onChange}
      ></input>
      <div>
      <label>Hours</label>
      <input value={minutes/60}
      type='number'
      id='hours'
      onChange={onChange}
      ></input>
      </div>
    </div>
  )
}

root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
