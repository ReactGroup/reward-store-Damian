import React from "react";
import ButtonLeft from "../filters/button/left";
import ButtonRight from "../filters/button/right";
import "./styles.css";
function SectionFooter({ itemSlice, page, setPage }) {
  return (
    <>
      <div className="content-inf">
        <span className="pagination-inf"> {page ? "17 a 32" : "01 a 16"}</span>
        <div className="content-arrows inf-arrow">
          {itemSlice.length > 15 &&
            (page ? (
              <>
                <ButtonLeft page={page} setPage={setPage} />
                <p className="button-footer">Prev</p>
              </>
            ) : (
              <>
                <p className="button-footer">Next</p>
                <ButtonRight page={page} setPage={setPage} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}
export default SectionFooter;
