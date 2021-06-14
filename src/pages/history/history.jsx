import React, { useState, useEffect } from "react";
import { headers, API_URL } from "../../header";
import "./styles.css";
import coin from "../../assets/icons/coin.svg";
import Menu from "../../../src/components/menu/menu";
import Paginator from "../../components/pagination/paginator";
function History() {
  const [history, setHistory] = useState([]);
  const [pages, setPages] = useState(0);
  const [current, setCurrent] = useState(0);
  const size = 5;

  useEffect(() => {
    setPages(Math.ceil(history.length / size));
    setCurrent(0);
  }, [history.length]);

  useEffect(() => {
    let peticion = fetch(`${API_URL}/user/history`, {
      headers,
    });
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setHistory(data);
      });
  }, []);

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
