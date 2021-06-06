import React from "react";
import "./styles.css";
import arrowright from "../../../assets/icons/arrowright.svg";
function Button({page,setPage}) {
  return (
    <button className="arrows" onClick={()=>setPage(!page)}>
      <img src={arrowright} alt="icon-arrow" />
    </button>
  );
}

export default Button;
