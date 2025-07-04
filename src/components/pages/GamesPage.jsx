import { Link } from 'react-router-dom';

const home2 = () => {
    return (
        <div>
            <h1>Welcome to spiele zone</h1>
            <h2>home page</h2>

            <ul className='game-tile-con'>
                <li><Link to='/tzfe'><div className='game-tile t2048 zoom'>
                <div className='gtitle'>2048</div>
            </div></Link></li>
                <li><Link to='/snake'><div className='game-tile tsnake zoom'>
                <div className='gtitle'>Snake</div>
            </div></Link></li>
                <li><Link to='/hm'><div className='game-tile thangman zoom'>
                <div className='gtitle'>Hangman</div>
            </div></Link></li>
                <li><Link to='/ghost-code/play'><div className='game-tile tgc zoom'>
                <div className='gtitle'>Ghost Code</div>
            </div></Link></li>
                <li><Link to='/bounce'><div className='game-tile tbounce zoom'>
                <div className='gtitle'>Bounce.exe</div>
            </div></Link></li>

            </ul>
        </div>
    )
}

export default home2
