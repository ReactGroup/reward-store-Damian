import React from "react";
import next from "../../assets/icons/arrowright.svg";
import prev from "../../assets/icons/arrowleft.svg";
import "./styles.css";
function Paginator({ pages, current, handlePages }) {
  return (
    <div className="paginator">
      {current > 0 && (
        <button onClick={() => handlePages(current - 1)}>
          <img src={prev} alt="prev" />
          <p className="text-pages">Anterior</p>
        </button>
      )}
      {current < pages - 1 && (
        <button onClick={() => handlePages(current + 1)}>
          <p className="text-pages">Next</p>
          <img src={next} alt="next" />
        </button>
      )}
    </div>
  );
}
export default Paginator;
