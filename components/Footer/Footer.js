import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/julie-yudowitch-041645208/"
            className={styles.socialLink}
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon color="#ded7f4" icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/JulieYudowitch"
            className={styles.socialLink}
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon color="#ded7f4" icon={faGithub} size="2x" />
          </a>
        </div>
        <a
          href="mailto: julieyudo@gmail.com"
          className={styles.email}
          target="blank"
          rel="noopener noreferrer"
        >
          julieyudo@gmail.com
        </a>
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} Julie Yudowitch
        </p>
      </div>
    </footer>
  );
}

export default Footer;
