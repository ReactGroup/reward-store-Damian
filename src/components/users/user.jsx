import React,{useState,useEffect} from "react"; 
import './styles.css';
import coin from '../../assets/icons/coin.svg'; 

// const API_URL = process.env.REACT_APP_API_URI;
// const API_KEY = process.env.REACT_APP_API_KEY;
// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${API_KEY}`
// }
//`${API_URI}/user/me`, { headers }

  function Users(){
    let [users, setUsers]=useState([]);
 
     useEffect(() => {let peticion = fetch("https://coding-challenge-api.aerolab.co/user/me",{
      headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json",
          // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c"
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        }
  }
  ); 
      peticion
        .then((respuesta) => {
          return respuesta.json();  
        })
        .then((data) => {
          setUsers(data);
        });
    }, []);
    return(
      <div className="content-users">
           <div className="user">
               <h5>{users.name}</h5>
                 {users.points}
                <img src={coin} alt="user-coins" className="coins" />         
            </div>                
      </div>
          )
      }
  export default Users; 