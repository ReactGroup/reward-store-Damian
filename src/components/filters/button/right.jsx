import React from "react"; 
import './styles.css';
import arrowright from '../../../icons/arrowright.svg'
function Button(){
    return(
        <button className="arrows">
            <img src={arrowright} alt="icon-arrow" className="arrow-sup" />
        </button>

    )
}

export default Button; 