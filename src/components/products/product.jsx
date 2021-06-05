import React, { useState, useContext } from "react";
import "./styles.css";
import buyWhite from "../../assets/icons/buywhite.svg";
import { UserContext } from "../../context/userContex";
import Card from '../productCard.jsx/card'
function Product({ articles }) {
  let [hover, setHover] = useState(false);
  const { users, setUser, user } = useContext(UserContext);

  return (
    <>
    <div className="content-product">
      <div className="product-list">
        {articles.map((product) => {
          let diference = product.cost - users.points;
          let cost = product.cost;

          const redeem = async () => {
            if (cost <= users.points) {
              console.log("podes comprar");
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
              setUser(!user);
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
              onClick={redeem}
            >
              <div className="content-hover">
                {cost >= users.points ? (
                  <p className="notBuy">You need {diference} more coins </p>
                ) : (
                  <img className="buy" src={buyWhite} alt="logo-confirm-buy" />
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
                  <p className="buy-hover"> BUY </p>{" "}
                </div>
              )}
              {hover === true && users.points < cost && (
                <div className="not-redeem">
                  {" "}
                  <p className="not-buy-hover"> GET COINS </p>{" "}
                </div>
              )}

              <h3 className="category">{product.category}</h3>
              <h4 className="item">{product.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
    
    </>
  );
}
export default Product;
