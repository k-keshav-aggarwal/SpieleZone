/* global gtag */
import React, { useState, useEffect } from "react";
import './gc1.css';

function trackGameStart(gameName) {
    if (typeof gtag === 'function') {
        gtag('event', 'game_start', {
            'game_name': gameName
        });
        console.log('GA4 Event: game_start, Game:', gameName);
    } else {
        console.warn('gtag function not found. GA4 tracking may not be set up correctly.');
    }
}

const GCintro = () => {
    // ✅ SEO tags injected dynamically
    useEffect(() => {
        const prevTitle = document.title;
        const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content');

        // Set new SEO title & description
        document.title = 'Ghost Code - Defend the realms|| Spiele Zone || Shadowveil StudioZ';
        let descTag = document.querySelector("meta[name='description']");
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.name = 'description';
            document.head.appendChild(descTag);
        }
        descTag.setAttribute('content', 'Ghostly threats are descending from the veil. Each word you type pushes back the shadows. Can your typing banish them in time?');
        let KeyWords = document.querySelector("meta[name='keywords']");
        if (!KeyWords) {
            KeyWords = document.createElement('meta');
            KeyWords.name = 'keywords';
            document.head.appendChild(KeyWords);
        }
        KeyWords.setAttribute('content', 'Ghost Code, ghost Code by Shadowveil StudioZ, Ghost Code Spiele Zone, Ghost Code typing game');

        // Canonical link
        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://spiele-zone.vercel.app/ghost-code');

        return () => {
            document.title = prevTitle;
            if (descTag && prevDesc) {
                descTag.setAttribute('content', prevDesc);
            }
            if (canonical) {
                canonical.setAttribute('href', 'https://spiele-zone.vercel.app/');
            }
        };
    }, []);

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
            <a href='/ghost-code/play' className='glitch' data-glitch='Play' onClick={() => trackGameStart('ghostcode')}>Play</a>
        </div>
        </>
        
    )
}

export default GCintro
