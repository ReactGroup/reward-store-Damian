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
          //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiOTUwNDliNzc4MTAwMjA5YzVhYmUiLCJpYXQiOjE2MjI5MDYxMTZ9.IU39X-f0cIEBL4DMpxdG5qBharIwcHRxg6voJfFRe2Y",
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
    <ProductContext.Provider value={{items,copiaItems,setCopiaItems }}>
      {props.children}
    </ProductContext.Provider>
  );
};
