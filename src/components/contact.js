import React from 'react'
import {Link} from 'react-router-dom'

const contactus = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>We recommend you to contact us using the email provided below for quick response.</p>
            <h1>Our emails</h1>
            <li><a href="mailto:it10800222125@gmail.com" title="Reach Shadowveil Studioz via Email">Shadowveil StudioZ</a></li>
            <li><a href="mailto:satvikgupta050404@gmail.com" title="Reach Satvik Gupta via email">Satviky</a></li>
            <h2>Discord</h2>
            <li>
            <Link title='Talk to Shadowveil StudioZ' to="https://discord.com/users/1070314800615276555">Discord ID</Link>
            
            </li>
        </div>
    )
}   

export default contactus
