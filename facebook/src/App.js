import './App.css';
import Homepage from './pages/Homepage';
import PeoplePage from './pages/PeoplePage';
import Gamepage from './pages/Game';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Tabs from './components/Tabs'

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/people' element={<PeoplePage />} />
      <Route path='/game' element={<Gamepage />} />
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
