import React from "react"; 
import './styles.css';
import arrowleft from '../../../icons/arrowleft.svg';
function Button(){
    return(
             <button className="arrows">
               <img src={arrowleft} alt="icon-arrow" className="arrow-sup" />
             </button>
    )
}
export default Button; 