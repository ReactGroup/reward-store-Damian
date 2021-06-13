import React, { useContext, useState } from "react";
import { headers, API_URL_REDEEM } from "../../header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import buyBlue from "../../assets/icons/buyblue.svg";
import { UserContext } from "../../context/userContex";

function Card({ product }) {
  const { users, setUser } = useContext(UserContext);

  const notify = () =>
    toast.dark("Succesful Buy!!!", {
      position: "top-right",
      autoClose: 2800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const error = () =>
    toast.error("Please Get new Coins!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  let diference = product.cost - users.points;
  let cost = product.cost;
  let result = users.points - cost;
  let [hover, setHover] = useState(false);

  const redeem = async () => {
    if (cost <= users.points) {
      const response = await fetch(`${API_URL_REDEEM}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          productId: product._id,
        }),
      });
      response.json();
      setUser(result);
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
          <h2 className="buy-hover" onClick={notify}>
            BUY
          </h2>
          <ToastContainer />
        </div>
      )}
      {hover === true && users.points < cost && (
        <div className="not-redeem">
          {" "}
          <h2 className="not-buy-hover" onClick={error}>
            {" "}
            NOT AVAILABLE{" "}
          </h2>{" "}
          <ToastContainer />
        </div>
      )}
      <h3 className="item">{product.name}</h3>
      <h4 className="category">{product.category}</h4>
      <div className="item-price"></div>
    </div>
  );
}
export default Card;
