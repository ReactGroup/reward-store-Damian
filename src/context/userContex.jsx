import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  let [users, setUsers] = useState([]);
  const [user, setUser] = useState(true);

  useEffect(() => {
    let peticion = fetch("https://coding-challenge-api.aerolab.co/user/me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
         "Authorization": 
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiOTUwNDliNzc4MTAwMjA5YzVhYmUiLCJpYXQiOjE2MjI5MDYxMTZ9.IU39X-f0cIEBL4DMpxdG5qBharIwcHRxg6voJfFRe2Y",

        },
    });
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, users }}>
      {props.children}
    </UserContext.Provider>
  );
};
