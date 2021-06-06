import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContex";
import "./styles.css";
import buyBlue from "../../assets/icons/buyblue.svg";

function Card({ product }) {
  const { users } = useContext(UserContext);

  let diference = product.cost - users.points;
  let cost = product.cost;
  let [hover, setHover] = useState(false);

  const redeem = async () => {
    if (cost <= users.points) {
      const response = await fetch(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c",
          },
          body: JSON.stringify({
            productId: product._id,
          }),
        }
      );
      response.json();
      alert("comprado");
    } else {
      alert("no se puede comprar");
    }
  };
  return (
    <div
      className="product-card"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      // onClick={redeem}
    >
      <div className="content-hover">
        {cost >= users.points ? (
          <p className="notBuy">You need {diference} more coins </p>
        ) : (
          <img className="buy" src={buyBlue} alt="logo-confirm-buy" />
        )}
      </div>
      <img
        className="product-card-img"
        src={product.img.url}
        alt={product.name}
      />
      {hover === true && users.points >= cost && (
        <div className="redeem">
          {" "}
          <p onClick={redeem} className="buy-hover"> BUY </p>{" "}
        </div>
      )}
      {hover === true && users.points < cost && (
        <div className="not-redeem">
          {" "}
          <p onClick={redeem} className="not-buy-hover"> GET COINS </p>{" "}
        </div>
      )}
      <h3 className="category">{product.category}</h3>
      <h4 className="item">{product.name}</h4>

      <div className="item-price"></div>
    </div>
  );
}
export default Card;
