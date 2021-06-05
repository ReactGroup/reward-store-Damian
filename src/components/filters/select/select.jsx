import React from "react";
import "./styles.css";

function Select({ setCopiaItems,items}) {
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
    setCopiaItems(filterUpdate)
  }
  return (
    <select onChange={filterByArticle} name="categories" id="">
      <option value="All Categories">All Categories</option>
      {result.map((value, index) => {
        return <option key={index}>{value.category}</option>;
      })}
    </select>
  );
}
export default Select;
