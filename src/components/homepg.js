export default function Homepg() {
    return (
      <div className="hp-flex">
        <div className="hp-l"> 
          <div>
            <h1>Spiele Zone</h1>
            <div>Discover a collection of fun and engaging web-based games to play and enjoy.</div> {/* More user-focused description */}
          </div>
          <div>
            <h2>Featured Games</h2>
            <ul>
              <li><strong>2048:</strong> A classic puzzle game where you slide tiles to merge numbers and reach the target.</li> {/* More descriptive */}
              <li><strong>Hangman:</strong> Test your word knowledge in this engaging word-guessing game.</li> {/* More descriptive */}
              <li><strong>Snake Game:</strong>Latest addition to our game website. Feed your snake and see it grow.</li> {/* Positive framing */}
            </ul>
            <h2>Coming Soon</h2> 
            <ol>
              <li>Score Tracking for 2048</li>
              <li>Different Themes</li>
              <li>More Games</li>
            </ol>
            <h2>Technical Notes</h2> 
            <p>Spiele Zone is built using React.js, a modern JavaScript library for building user interfaces. This project has been a valuable learning experience in web development.</p>
          </div>
          <div>
            <h2>Upcoming games</h2>
            <p>We have planned few games to be added on our list</p>
            <ul>
                <li>Flappy Bird</li>
                <li>Matching Game</li>
                <li>Helix Stack</li>
            </ul>

          </div>
          <div>
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, please feel free to contact us via <a href="mailto:satvikgupta_it.aec@yahoo.com">email</a>.</p> {/* Added contact info */}
          </div>
          <div>
            <p>...</p> 
          </div>
        </div>
      </div>
    );
  }