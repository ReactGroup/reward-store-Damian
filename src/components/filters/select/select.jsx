import React, { useContext } from "react";
import { ProductContext } from "../../../context/productContext";
import "./styles.css";

function Select({ filter }) {
  const { items, copiaItems } = useContext(ProductContext);
  let repeat = {};
  let result = items.filter(function (value) {
    let exists = !repeat[value.category];
    repeat[value.category] = true;
    return exists;
  });

  function filterByArticle(e) {
    let filterUpdate = items.filter((value) => {
      return e.target.value === "All Categories"
        ? value
        : value.category === e.target.value;
    });
    filter(filterUpdate);
  }
  function filterHigher(e) {
    let array = [...copiaItems];
    let order = array.sort((a, b) => b.cost - a.cost);
    filter(order);
  }

  function filterLower(e) {
    let array = [...copiaItems];
    let order = array.sort((a, b) => a.cost - b.cost);
    filter(order);
  }

  return (
    <>
      <select onChange={filterByArticle} name="categories" id="">
        <option className="option" value="All Categories">
          All Categories
        </option>
        {result.map((value, index) => {
          return <option key={index}>{value.category}</option>;
        })}
      </select>

      <input
        className="input-filter"
        type="radio"
        id="lowest"
        name="filter"
        value="lowest"
        onClick={filterLower}
      />
      <label id="order-label" for="lowest">Lower Price</label>

      <input
        className="input-filter"
        type="radio"
        id="highest"
        name="filter"
        value="highest"
        onClick={filterHigher}
      />
      <label id="order-label"  for="highest">Higher Price</label>
    </>
  );
}
export default Select;
