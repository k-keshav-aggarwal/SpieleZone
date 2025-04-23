import {useEffect} from "react";
export default function Homepg() {
    useEffect(() => {
        const loadAds = () => {
            if (window) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        };
        loadAds();
    }, []);

    return (
        <div className="hp-flex">
            <div classname="hp-l">
                <div>
                    <h1>Welcome to my app</h1>
                    <div>We got a lot of game [only 3] for you guys... play and chill</div>
                </div>
                <div>
                    <h2>Features</h2>
                    <ul>
                        <li>2048 game- the best thing i did in my entire react learning process</li>
                        <li>Hangman - Easiest thing i found in my entire learning process || Adding the words was a hard task tho.</li>
                    </ul>
                    <h2>Issues</h2>
                    <ul>
                        <li>Snake Game- the biggest issue... i will fix the game soon!</li>
                        <li>No score tracking feature... as i want to finish frontend first</li>
                        <li>No game over- new game or press &lt; space &gt; to start new game</li>
                    </ul>
                </div>


            </div>
            <div classname="hp-r-ad">
                <div>
                    <ins
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-XXXXXXXXXXXX"
                        data-ad-slot="XXXXXXX"
                        data-ad-format="auto"
                    ></ins>
                </div>
            </div>
        </div>
    );
}
