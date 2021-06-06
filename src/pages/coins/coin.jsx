import React, { useState, useContext } from "react";
import "./styles.css";
import Menu from "../../components/menu/menu";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../../src/context/userContex";

function Coin() {
  let [credits, setCredits] = useState("");
  const { user, setUser } = useContext(UserContext);
  const postUser = async () => {
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/user/points",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiOTUwNDliNzc4MTAwMjA5YzVhYmUiLCJpYXQiOjE2MjI5MDYxMTZ9.IU39X-f0cIEBL4DMpxdG5qBharIwcHRxg6voJfFRe2Y",
          //  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk", (ACAMICA)
        },
        body: JSON.stringify({
          amount: credits,
        }),
      }
    );
    response.json();
    setUser(!user);
  };

  function handleClick(e) {
    if (e.target.value === "1000") {
      setCredits(1000);
    } else if (e.target.value === "5000") {
      setCredits(5000);
    } else if (e.target.value === "7500") {
      setCredits(7500);
    }
  }

  function handleSubmit(credits) {
    postUser(credits);
    //alert("Exito al comprar");
  }

  return (
    <>
      <Menu />
      <div className="content-div">
        <div className="text-coin">
          <p className="text">It's Time to get more Coins!!!</p>
          <p className="text">Click over one icon to Start!</p>
        </div>
        <div className="div-coins">
          <div className="list-coins">
            <div className="item-coins">
              <img src={coin} alt="" className="coins" />
              <label for="1">1000</label>
              <input
                type="radio"
                id="1"
                className="input-coins"
                name="credit"
                value="1000"
                onChange={handleClick}
              />
            </div>
            <div className="item-coins">
              <img src={coin} alt="" className="coins" />
              <label for="2">5000</label>
              <input
                type="radio"
                id="2"
                className="input-coins"
                name="credit"
                value="5000"
                onChange={handleClick}
              />
            </div>

            <div className="item-coins">
              <img src={coin} alt="" className="coins" />
              <label for="3">7500</label>
              <input
                type="radio"
                id="3"
                className="input-coins"
                name="credit"
                value="7500"
                onChange={handleClick}
              />
            </div>
          </div>
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </>
  );
}
export default Coin;
