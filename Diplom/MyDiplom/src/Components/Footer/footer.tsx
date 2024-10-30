import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ROUTES } from "../../utils/routes";
import styles from "./style.module.scss";
import LOGO from "../../image/logo.svg";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="SHOP" />
        </Link>
      </div>
      <div className={styles.rights}>
        <p>Developed by Vladimir</p>
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconWrapper}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconWrapper}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconWrapper}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </section>
  );
};
export default Footer;
