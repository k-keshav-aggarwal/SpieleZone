import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepg from './components/homepg';
import Tzfe from './components/tzfe';
import SnakeGame from './components/SnakeGame';
import Hangman from './components/Hangman';
import BBar from './components/Bottombar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepg />} />
        <Route path="/tzfe" element={<Tzfe />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/hm" element={<Hangman />} />
        <Route path="/privacy-policy" element={<Prpo />} />
        <Route path="/about-us" element={<AU />} />
        {/* <Route path="/reach-us" element={<CU />} /> */}
      </Routes>
      <BBar />
    </Router>
  );
}

export default App;
