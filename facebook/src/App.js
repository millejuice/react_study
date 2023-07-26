import './App.css';
import Homepage from './pages/Homepage';
import PeoplePage from './pages/PeoplePage';
import Gamepage from './pages/Game';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Tabs from './components/Tabs'
import Navbar from './components/Navbar';
import Login from './pages/Login';

const Layout = ({children}) => (
  <>
  <Navbar/>
  {children}
  </>
)

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout><Homepage /></Layout>} />
      <Route path='/people' element={<Layout><PeoplePage /></Layout>} />
      <Route path='/game' element={<Layout><Gamepage /></Layout>} />
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
