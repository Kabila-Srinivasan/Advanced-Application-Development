/* eslint-disable react/prop-types */
import "../assets/css/HomeHero.css";

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
