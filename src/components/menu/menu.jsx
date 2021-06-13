import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/home.png";
import Users from "../users/user";
function Menu() {
  return (
    <header>
      <Link className="style" to="/home">
        <img className="logo" src={logo} alt="logo-home" />
      </Link>

      <div class="boton-menu">
        <Users />
        <input id="desplegar" type="checkbox" class="custom-checkbox" />
        <label for="desplegar" class="label-menu">
          <div class="mostrar-menu">
            <div class="linea linea-top"></div>
            <div class="linea linea-med"></div>
            <div class="linea linea-low"></div>
          </div>
        </label>
        <div class="menu-desplazable" id="menuList">
          <ul>
            <li class="menu-texto style">
              <Link className="style" to="/home">
                HOME
              </Link>
            </li>
            <li class="menu-texto style">
              <Link className="style" to="/login">
                GET COINS
              </Link>
            </li>
            <li class="menu-texto style">
              <Link className="style" to="/history">
                HISTORY
              </Link>
            </li>
            <li class="menu-texto">
                <a class="style" href="https://www.google.com.ar/">
                EXIT</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Menu;
