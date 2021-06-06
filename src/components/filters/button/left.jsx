import React from "react";
import "./styles.css";
import arrowleft from "../../../assets/icons/arrowleft.svg";
function Button({page, setPage}) {
  return (
    <button className="arrows" onClick={()=>setPage(!page)}>
      <img src={arrowleft} alt="icon-arrow"/>
    </button>
  );
}
export default Button;

