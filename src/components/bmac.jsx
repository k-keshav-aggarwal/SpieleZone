import React from 'react';
import styles from './DonateButton.module.css'; // Importing CSS module for custom styles

const DonateButton = () => {
    return (
        <a
            href="https://coff.ee/shadowveilstudioz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.donateButton} // Applying CSS module class
        >
            <span className={styles.heart} role="img" aria-label="heart">❤️</span>
            Donate
        </a>
    );
};

export default DonateButton;