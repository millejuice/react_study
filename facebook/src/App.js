import './App.css';
import Homepage from './pages/Homepage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage />}>
      </Route>  
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
