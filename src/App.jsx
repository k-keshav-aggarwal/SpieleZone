import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Homepg from './components/homepg.jsx';
import Home2 from './components/home2.jsx';
import Tzfe from './components/tzfe.jsx';
import SnakeGame from './components/SnakeGame.jsx';
import Hangman from './components/Hangman.jsx';
import BBar from './components/Bottombar.jsx';
import GCintro from './components/Ghostcode-intro.jsx';
import GCplay from './components/GC.jsx';
import Prpo from './components/prpo.jsx';
import AU from './components/aboutus.jsx';
import BounceGame from './components/bounce/bounce.jsx';
import DonateButton from './components/bmac.jsx';
import CU from './components/contact.jsx';

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