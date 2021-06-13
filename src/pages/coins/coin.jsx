import React, { useState, useContext } from "react";
import { headers, API_URL_POINTS } from "../../header";
import "./styles.css";
import Menu from "../../components/menu/menu";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../../src/context/userContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Coin() {
  let [credits, setCredits] = useState("");
  let[validateBtn, setValidateBtn] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const postUser = async () => {
    const response = await fetch(`${API_URL_POINTS}`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        amount: credits,
      }),
    });
    response.json();
    setUser(!user);
  };

  function handleClick(e) {
    if (e.target.value === "1000") {
      setCredits(1000);
      setValidateBtn(true);
    } else if (e.target.value === "5000") {
      setCredits(5000);
      setValidateBtn(true);
    } else if (e.target.value === "7500") {
      setCredits(7500);
      setValidateBtn(true);
    }
  }

  function handleSubmit(credits) {
    postUser(credits);
    if(!!validateBtn){

      toast.success("You buy new Coins!", {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
              <label id="label-coins" for="1">1000</label>
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
              <label id="label-coins" for="2">5000</label>
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
              <label id="label-coins" for="3">7500</label>
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
          <button className="submit-coin" onClick={handleSubmit}>SUBMIT</button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
export default Coin;
