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
      <a href="https://facebook.com/refat.yahoo" target={"_blank"}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.linkedin.com/in/m-refat-alam/" target={"_blank"}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/refat-alam" target={"_blank"}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://discord.com" target={"_blank"}>
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    </div>
  );
}
