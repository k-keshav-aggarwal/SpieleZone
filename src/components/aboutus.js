import React from 'react'
import {Link} from 'react-router-dom'

const aboutus = () => {
    return (
        <div>
            <h1>Who are we?</h1>
            <p>Hi, I am a college student and I created this website while learning about React.js</p>
            <p>When i was working on this site I didn't thought of developing it till here because i was just doing it as a part of my learning process but when I saw the response and attention this website was getting i decided to give it a shot.</p>
            <p>You can figure it out that i am not good at being professional but if you reading this then please do come back to this site as much as possible. I need this... this is very much needed at this point.</p>

            <h2>some more websites by the creator</h2>
            <div className="lts">
            <Link to="https://gsatvik.com">My resume</Link>
            </div>
            <div className="lts">
            <Link to="https://project-rescue.onrender.com/">Personal Project #1</Link>
            </div>
            <div className="lts">
            <Link to="https://pr-rescue.vercel.app/">Personal Project #1 [Demo Website]</Link>
            </div>
            
        </div>
    )
}

export default aboutus
