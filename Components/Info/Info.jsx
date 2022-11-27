import refatImg from "/src/assets/refat.jpg";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function email() {
  console.log("clicked");
}
function linkedIn() {
  console.log("Clicked");
}

export default function Info() {
  return (
    <div className="Info">
      <img src={refatImg} alt="refat-pic" />
      <h1>Refat Alam</h1>
      <h2>Frontend Developer</h2>
      <a href="https://google.com" target="_blank">
        <button id="email-btn" onClick={email}>
        <FontAwesomeIcon icon={faEnvelope}/> Email
        </button>
      </a>
      <a href="https://www.linkedin.com/in/m-refat-alam/" target={"_blank"}>
        <button id="linkedin-btn" onClick={linkedIn}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </button>
      </a>
    </div>
  );
}
