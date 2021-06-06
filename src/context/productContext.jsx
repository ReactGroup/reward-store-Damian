import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  let [items, setItems] = useState([]); //HOOK DE PRODUCTOS SELECCIONADOS
  let [copiaItems, setCopiaItems] = useState([]); //HOOK PARA CONSERVAR ARRAY ORIGINAL

  useEffect(() => {
    let peticion = fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiOTUwNDliNzc4MTAwMjA5YzVhYmUiLCJpYXQiOjE2MjI5MDYxMTZ9.IU39X-f0cIEBL4DMpxdG5qBharIwcHRxg6voJfFRe2Y",
        //  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
      },
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
