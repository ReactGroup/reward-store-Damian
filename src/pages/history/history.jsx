import React, { useContext } from "react";
import { HistoryContext } from "../../context/historyContext";
import { useEffect, useState } from "react";
import "./styles.css";
import coin from "../../assets/icons/coin.svg";
import Menu from "../../../src/components/menu/menu";
import Paginator from "../../components/pagination/paginator";
function History() {
  const { history } = useContext(HistoryContext);
  console.log(history) //NO LLEGA EL DATO ACTUALIZADO 
  const [pages, setPages] = useState(0);
  const [current, setCurrent] = useState(0);
  const size = 5;

  useEffect(() => {
    setPages(Math.ceil(history.length / size));
    setCurrent(0);
  }, [history.length]);
  return (
    <>
      <Menu />
      <div className="content-history">
        <h3>Image</h3>
        <h3>Product Name</h3>
        <h3>Cost</h3>
      </div>

      <div>
        {history.length > 0 &&
          history.slice(current * size, current * size + size).map((item) => {
            console.log(history)//NO LLEGA EL DATO ACTUALIZADO 
            return (
              <>
                <div className="history-list" key={item._id}>
                  <img className="img-history" src={item.img.url} alt="" />
                  <h4>{item.name}</h4>
                  <div className="content-price">
                    <img src={coin} alt="" />
                    <h4>{item.cost}</h4>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="content-paginator">
        <Paginator pages={pages} current={current} handlePages={setCurrent} />
      </div>
    </>
  );
}
export default History;
