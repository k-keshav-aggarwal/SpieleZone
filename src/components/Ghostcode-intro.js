import React from 'react'
import './gc1.css'

const GCintro = () => {
    return (
        <>
        <div>
            <h1>Ghost Code</h1>
            <h2>Defend the realms by typing <span className='sh1'>G</span><span className='sh2'>h</span><span className='sh3'>o</span><span className='sh1'>s</span><span className='sh2'>t</span><span className='sh3'>l</span><span className='sh1'>y</span>  <span className='sh2'>C</span><span className='sh3'>o</span><span className='sh1'>d</span><span className='sh2'>e</span>
            </h2>

            <p>Ghostly threats are descending from the veil. Each word you type pushes back the shadows. Can your typing banish them in time?</p>
            <h3>How to play</h3>
            <p>Cloud with words will fall down and you need to type the word before they hit you.</p>
            <h4>Good Luck</h4>
            <a href='/ghost-code/play' className='glitch' data-glitch='Play'>Play</a>
        </div>
        </>
        
    )
}

export default GCintro
