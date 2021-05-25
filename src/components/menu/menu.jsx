import React from "react"; 
import {Link} from "react-router-dom"
import './styles.css';
import logo from '../../images/home.png'
function Menu(){
    return(
        <header>
             <img className="logo" src={logo} alt="logo-home" />

             <div class="boton-menu">
          {/* <Users/> */}
          <input id="desplegar" type="checkbox" class="custom-checkbox" />
          <label for="desplegar" class="label-menu">      
            <div class="mostrar-menu">
              <div class="linea linea-top"></div>
              <div class="linea linea-med"></div>
              <div class="linea linea-low"></div>
            </div>
          </label>
          <div class="menu-desplazable" >
            <ul>
                <li class="menu-texto style">
                <Link className="style"  to="/">HOME</Link>   
                </li> 
            </ul>
          </div>
        </div>
        </header>
    )
}

export default Menu; 