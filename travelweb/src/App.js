import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Home from './components/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
