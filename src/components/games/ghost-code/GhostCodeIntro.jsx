import { useEffect } from "react";
import styles from "./GhostCodeIntro.module.css";

function trackGameStart(gameName) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'game_start', {
      'game_name': gameName
    });
    console.log('GA4 Event: game_start, Game:', gameName);
  } else {
    console.warn('gtag function not found. GA4 tracking may not be set up correctly.');
  }
}

const GCintro = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content');

    document.title = 'Ghost Code - Defend the realms || Spiele Zone || Shadowveil StudioZ';
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

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://spiele-zone.vercel.app/ghost-code');

    return () => {
      document.title = prevTitle;
      if (descTag && prevDesc) descTag.setAttribute('content', prevDesc);
      if (canonical) canonical.setAttribute('href', 'https://spiele-zone.vercel.app/');
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Ghost Code</h1>
      <h2>
        <span className={styles.sh1}>G</span>
        <span className={styles.sh2}>h</span>
        <span className={styles.sh3}>o</span>
        <span className={styles.sh1}>s</span>
        <span className={styles.sh2}>t</span>
        <span className={styles.sh3}>l</span>
        <span className={styles.sh1}>y</span>&nbsp;
        <span className={styles.sh2}>C</span>
        <span className={styles.sh3}>o</span>
        <span className={styles.sh1}>d</span>
        <span className={styles.sh2}>e</span>
      </h2>

      <p>Ghostly threats are descending from the veil. Each word you type pushes back the shadows. Can your typing banish them in time?</p>

      <h3>How to play</h3>
      <p>Clouds with words will fall down. You need to type each word before it hits the bottom.</p>

      <h4>Good Luck</h4>

      <a
        href="/ghost-code/play"
        className={styles.glitch}
        data-glitch="Play"
        onClick={() => trackGameStart('ghostcode')}
      >
        Play
      </a>
    </div>
  );
};

export default GCintro;
