import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App(){
  const [counter, setValue] = React.useState(0);
  const [keyword,setKeyword]=React.useState("");
  function onChange(event){
    setKeyword(event.target.value);
  }
  function onClick(){
    setValue((prev)=>prev+1);
    console.log("I run all the time");
  }

  function iRunOnlyOnce(){
    console.log("i run only once");
  }  
  React.useEffect(iRunOnlyOnce,[]);
  React.useEffect(()=>{
    if(keyword != "")
        {console.log("Search for ",keyword);}
  },[keyword]);
  React.useEffect(()=>{
    console.log("I react when counter changes");
  },[counter])
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <input 
      value={keyword}
      type='text'
      placeholder='search keyword'
      onChange={onChange}
      ></input>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
