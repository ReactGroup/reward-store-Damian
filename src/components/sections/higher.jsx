import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import "./styles.css";
import Select from "../../components/filters/select/select";

function Higher({ page }) {
  const {items, setCopiaItems } = useContext(ProductContext);

  function filter(selected) {
    setCopiaItems(selected);
  }
  function btnReset() {
    setCopiaItems(items);
  }
  return (
    <>
      <div className="content-img"></div>
      <div className="content-filter">
        <p className="pagination">{page ? "17 a 32" : "01 a 16"}</p>
        <div className="content-form">
          <p className="orderBy">Filter by: </p>
          <form action="" className="form-flex">
            <Select
              filter={filter}
            />

            <button type="reset" onClick={btnReset}>
              Reset Filter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Higher;
