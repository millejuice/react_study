import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar/navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import {Services} from './pages/Services'
import {Contact} from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
