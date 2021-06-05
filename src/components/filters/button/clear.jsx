import React from "react";
import "./styles.css";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Clear() {
  const handleOnSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <button className="btn-filter" onSubmit={handleOnSubmit}>
      <FontAwesomeIcon icon={faUndo} />
    </button>
  );
}

export default Clear;
