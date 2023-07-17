import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Movie from './components/movie.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  //   const [toDo,setToDo] = React.useState("");
//   const [toDos,setToDos]=React.useState([]);
  
// function onChange(event){
//   setToDo(event.target.value);
//   console.log(event.target.value)
// }

// function onSubmit(event){
//   event.preventDefault();
//   if(toDo === ""){
//     return;
//   }
//   setToDos((currentArray)=>[toDo,...currentArray]);
//   setToDo("");
// }
// console.log(toDos);
//   return (
//     <div className="Movie App">
//       <h1>My To Dos {toDos.length}</h1>
//       <form onSubmit={onSubmit}>
//       <input 
//       value={toDo}
//       placeholder='write'
//       onChange={onChange}
//       ></input>
//       <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((toDo, index)=>
//         (<li key={index}> {toDo}</li>)
//         )}
//         {/* map은 toDos에 있는 리스트들 한번씩 선택 가능하게 해준다 array가져와서 li로 구성된 새로운 array마드는 것이다 */}
//       </ul>
//     </div>
//   );
}

root.render(
    <App />
);

reportWebVitals();
