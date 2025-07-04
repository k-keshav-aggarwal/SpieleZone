import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Homepg from './components/pages/HomePage.jsx';
import SnakeGame from './components/games/snake/SnakeGame.jsx';
import Hangman from './components/games/hangman/Hangman.jsx';
import BBar from './components/layout/BottomBar.jsx';
import GCintro from './components/games/ghost-code/GhostCodeIntro.jsx';
import GCplay from './components/games/ghost-code/GhostCode.jsx';
import Prpo from './components/PrivacyPolicy.jsx';
import BounceGame from './components/games/bounce/bounce.jsx';
import DonateButton from './components/Donate.jsx';
import CU from './components/pages/ContactPage.jsx';
import Game2048 from './components/games/game-2048/Game2048.jsx';
import AboutUs from './components/pages/AboutPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepg />} />
        <Route path="/home" exact element={<Homepg />} />
        <Route path="/Game2048" element={<Game2048 />} />
        <Route path="/Snake" element={<SnakeGame />} />
        <Route path="/HangMan" element={<Hangman />} />
        <Route path="/privacy-policy" element={<Prpo />} />
        {/* <Route path="/about-us" element={<AU />} /> */}
        <Route path="/reach-us" element={<CU />} />
        <Route path="/ghost-code" element={<GCintro />} />
        <Route path="/ghost-code/play" element={<GCplay />} />
        <Route path='/bounce' element={<BounceGame/>}/>
        <Route path='/About-us' element={<AboutUs/>}/>
      
      </Routes>
      <DonateButton/>
      <BBar />
    </Router>
  );
}

export default App;