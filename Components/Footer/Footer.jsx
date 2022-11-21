import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <a href="https://facebook.com" target={"_blank"}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://facebook.com" target={"_blank"}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://facebook.com" target={"_blank"}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://facebook.com" target={"_blank"}>
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    </div>
  );
}
