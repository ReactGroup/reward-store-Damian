import React, { useContext } from "react";
import { HistoryContext } from "../../context/historyContext";
import "./styles.css";
import coin from "../../assets/icons/coin.svg";
import Menu from "../../../src/components/menu/menu";

function History() {
  const { history } = useContext(HistoryContext);
  return (
    <>
      {/* <div></div> */}
      <Menu />
      <div className="content-history">
        <h3>Image</h3>
        <h3>Product Name</h3>
        {/* <h3 className="category">Category</h3> */}
        <h3>Cost</h3>
      </div>

      <div>
        {history.map((item) => {
          return (
            <>
              <div className="history-list">
                <img className="img-history" src={item.img.url} alt="" />
                <h4>{item.name}</h4>
                {/* <h4 className="category">{item.category}</h4> */}
                <div className="content-price">
                  <img src={coin} alt="" />
                  <h4>{item.cost}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default History;
