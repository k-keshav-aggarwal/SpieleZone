import { Link } from 'react-router-dom';

const Home2 = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Welcome to Spiele Zone</h1>
            <p style={{ marginBottom: '1rem', color: '#666' }}>by Shadowveil StudioZ</p>
            <h2 style={{ marginBottom: '2rem', color: '#888' }}>Choose Your Game</h2>

            <ul className='game-tile-con'>
                <li>
                    <Link to='/tzfe'>
                        <div className='game-tile t2048 zoom'>
                            <div className='gtitle'>2048</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/Snake'>
                        <div className='game-tile tsnake zoom'>
                            <div className='gtitle'>Snake</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/HangMan'>
                        <div className='game-tile thangman zoom'>
                            <div className='gtitle'>Hangman</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/ghost-code'>
                        <div className='game-tile tgc zoom'>
                            <div className='gtitle'>Ghost Code</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/memory'>
                        <div className='game-tile tmemory zoom'>
                            <div className='gtitle'>Memory Puzzle</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/bounce'>
                        <div className='game-tile tbounce zoom'>
                            <div className='gtitle'>Bounce</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home2;
