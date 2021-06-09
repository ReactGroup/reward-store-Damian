import { createContext, useState, useEffect } from "react";
import { headers, API_URL_PRODUCT } from "../header";
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  let [items, setItems] = useState([]);
  let [copiaItems, setCopiaItems] = useState([]);

  useEffect(() => {
    let peticion = fetch(`${API_URL_PRODUCT}`, {
      headers,
    });
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setItems(data);
        setCopiaItems(data);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{ items, copiaItems, setCopiaItems, setItems }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
