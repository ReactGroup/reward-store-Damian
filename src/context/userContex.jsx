import { createContext, useState, useEffect } from "react";
import { headers, API_URL_USER } from "../header";
export const UserContext = createContext();

export const UserContextProvider = (props) => {
  let [users, setUsers] = useState([]);
  const [user, setUser] = useState(true);

  useEffect(() => {
    let peticion = fetch(`${API_URL_USER}`, {
      headers,
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
