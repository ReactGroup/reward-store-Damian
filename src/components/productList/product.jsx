import React from "react";
import "./styles.css";

import Card from "../productCard.jsx/card";
function Product({ articles }) {
  return (
    <>
      <div className="content-product">
        <div className="product-list">
          {articles.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Product;
