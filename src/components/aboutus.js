import React from 'react'
import {Link} from 'react-router-dom'

const aboutus = () => {
    return (
<div>
  <h1>About Spiele Zone</h1>
  <p>Welcome to Spiele Zone! This website was created as a personal project to explore web development using React.js. What started as a learning endeavor has grown into a collection of fun and engaging web-based games.</p>

  <p>The initial positive response to the website inspired me to continue developing it and share it with a wider audience. My aim is to provide a simple and enjoyable platform for casual gaming.</p>

  <h2>About the Games</h2>
  <p>Currently, Spiele Zone features the following games:</p>
  <ul>
    <li><strong>2048:</strong> A classic number-sliding puzzle game that challenges your strategic thinking.</li>
    <li><strong>Snake Game:</strong> A timeless arcade game where you control a growing snake to eat and avoid obstacles. (Note: This game is currently being worked on and will be available soon.)</li>
    <li><strong>Hangman:</strong> A word-guessing game that tests your vocabulary.</li>
  </ul>

  <h2>About the Creator</h2>
  <p>I am a college student with a passion for learning and creating. This website is a way for me to combine my interest in technology and gaming. I am continuously working to improve Spiele Zone and potentially add more games in the future.</p>

  <h2>More Projects by the Creator</h2>
  <p>You can find more about my work and other projects here:</p>
  <div className="lts">
    <Link to="https://gsatvik.com">My Resume</Link>
  </div>
  <div className="lts">
    <Link to="https://project-rescue.onrender.com/">Personal Project #1</Link>
  </div>
  <div className="lts">
    <Link to="https://pr-rescue.vercel.app/">Personal Project #1 [Demo Website]</Link>
  </div>

  <h2>Contact</h2>
  <p>If you have any questions or feedback about Spiele Zone, please feel free to reach out via the <a href="mailto:satvikgupta_it.aec@yahoo.com">Email[press here]</a>.</p>
</div>
    )
}

export default aboutus
