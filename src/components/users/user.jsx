import React, { useContext } from "react";
import "./styles.css";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/userContex";
function Users() {
  const { users } = useContext(UserContext);
  return (
    <div className="content-users">
      <div className="user">
        <h5>{users.name}</h5>
        <img src={coin} alt="user-coins" className="coins" />
        {users.points}
      </div>
    </div>
  );
}
export default Users;
