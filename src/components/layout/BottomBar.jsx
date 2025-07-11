import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Info, ShieldCheck } from 'lucide-react';
import styles from './BottomBar.module.css';

const BottomBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Developer 1: Satvik */}
        <div className={styles.profileSection}>
          <div className={styles.profileRow}>
            <div className={styles.profileInfo}>
              <p className={styles.name}>Satvik Gupta</p>
              <p className={styles.title}>Final-Year Multi Language Developer</p>
            </div>
            <div className={styles.socials}>
              <a href="https://github.com/Satviky" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/satvik-g-27bb4a26a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:it10800222125@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Developer 2: Keshav */}
        <div className={styles.profileSection}>
          <div className={styles.profileRow}>
            <div className={styles.profileInfo}>
              <p className={styles.name}>Keshav Aggarwal</p>
              <p className={styles.title}>First-Year Web Developer</p>
            </div>
            <div className={styles.socials}>
              <a href="https://github.com/Satviky" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/agg-keshav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:Ka9812204392@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links (moved above bottom text) */}
        <div className={styles.footerLinks}>
          <Link title="About Shadowveil StudioZ" to="/about-us" className={styles.footerComp}>
            <Info className="w-33vw h-4" />
            About Us
          </Link>
          <Link title="Read our privacy policy" to="/privacy-policy" className={styles.footerComp}>
            <ShieldCheck className="w-33vw h-4" />
            Privacy Policy
          </Link>
          <Link title="Talk to Shadowveil StudioZ" to="/reach-us" className={styles.footerComp}>
            <Mail className="w-33vw h-4" />
            Contact Us
          </Link>
        </div>

        {/* Bottom Text with Scroll Button */}
        <div className={styles.bottomText}>
          <p>
            © {new Date().getFullYear()} Spiele-Zone By Shadowveil StudioZ. All rights reserved.
          </p>
          <button onClick={scrollToTop} aria-label="Back to top" className={styles.icon}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
