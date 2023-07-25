import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
