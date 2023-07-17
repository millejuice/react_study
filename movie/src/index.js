import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Movie from './components/movie.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return <Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path='/movie/:id' element={<Detail />} />
  </Routes>
  </Router>;
  }
// "/"은 유저가 Home("/")에 있으면 home route를 렌더링 한다는 것
//:id는 id가 변수명이 되는것이고, 그냥 id만 작성하면 string id가 된다
root.render(
    <App />
);

reportWebVitals();
