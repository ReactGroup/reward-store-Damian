import { createContext, useState, useEffect } from "react";
import { headers, API_URL } from "../header";

export const HistoryContext = createContext();

export const HistoryContextProvider = (props) => {
  const [history, setHistory] = useState([]);

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
    <HistoryContext.Provider value={{ history, setHistory }}>
      {props.children}
    </HistoryContext.Provider>
  );
};
