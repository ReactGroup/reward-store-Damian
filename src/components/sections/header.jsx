import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import "./styles.css";
import Select from "../filters/select/select";

function Header({ page, setPage }) {
  const { items, setCopiaItems } = useContext(ProductContext);

  function filter(selected) {
    setPage(false);
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
          <form action="" className="form-flex">
            <p className="orderBy">Filter by: </p>
            <Select filter={filter} />
            <button className="reset-filter" type="reset" onClick={btnReset}>
              Reset Filter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Header;
