import refatImg from "/src/assets/refat.jpg";
import "./Info.css";

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
        <button id="email-btn">Email</button>
      </a>
      <a href="https://linkedin.com" target={"_blank"}>
        <button id="linkedin-btn" onClick={linkedIn}>
          LinkedIn
        </button>
      </a>
    </div>
  );
}
