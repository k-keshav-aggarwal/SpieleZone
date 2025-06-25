import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepg from './components/homepg';

import Home2 from './components/home2';
import Tzfe from './components/tzfe';
import SnakeGame from './components/SnakeGame';
import Hangman from './components/Hangman';
import BBar from './components/Bottombar';
import GCintro from './components/Ghostcode-intro'
import GCplay from './components/GC'
import Prpo from './components/prpo'
import AU from './components/aboutus'
import BounceGame from './components/bounce/bounce';
import DonateButton from './components/bmac';

import CU from './components/contact'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepg />} />
          <Route path="/home" element={<Home2 />} />
          <Route path="/tzfe" element={<Tzfe />} />
          <Route path="/snake" element={<SnakeGame />} />
          <Route path="/hm" element={<Hangman />} />
          <Route path="/privacy-policy" element={<Prpo />} />
          <Route path="/about-us" element={<AU />} />
          <Route path="/reach-us" element={<CU />} />
          <Route path="/ghost-code" element={<GCintro />} />
          <Route path="/ghost-code/play" element={<GCplay />} />
          <Route path='/bounce' element={<BounceGame/>}/>
        </Routes>
        <DonateButton/>
        <BBar />
      </Router>
    
  );
}

export default App;
