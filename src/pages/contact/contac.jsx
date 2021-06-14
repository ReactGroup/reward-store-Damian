import React from "react";
import "./styles.css";
import Menu from "../../../src/components/menu/menu";
import {
  faGithubSquare,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
      <Menu />
      <div className="contact-content ">
        <div className="content-icons">
          <div style={{ fontSize: "1.5em" }}>
            <a href="https://www.linkedin.com/in/damian-perez-">Linkedin</a>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="a" style={{ fontSize: "1.5em" }}>
            <a href="https://github.com/ReactGroup/reward-store-Damian/projects/">Github</a>
            <FontAwesomeIcon icon={faGithubSquare} />
          </div>
          <div className="a" style={{ fontSize: "1.5em" }}>
            <a href="https://t.me/DPerez85">Telegram</a>
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          <div className="a" style={{ fontSize: "1.5em" }}>
            <a href="mailto:damianperez22@hotmail.com">Email</a>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        <div className="contact-right">
          <p className="text-paragraph">
            Mi nombre es Damián Pérez, soy estudiante de Sistemas y estoy dando
            mis primeros pasos profesionales en el mundo IT. <br /> Intento
            especializarme en desarrollo Web, por cierto mi gran pasión.
          </p>
          <p className="text-paragraph">
            Gracias a este proyecto y también a la incorporacion de otras
            herramientas adquiridas en mi área de estudio siento estar preparado
            para dar este paso e insertarme en este nuevo mundo.
          </p>
          <p className="text-paragraph">
            Espero que tu experiencia dentro de este sitio sea agradable, y
            cualquier sugerencia que aparezca es totalmente recibida.
          </p>
        </div>
      </div>
    </>
  );
}
export default Contact;
