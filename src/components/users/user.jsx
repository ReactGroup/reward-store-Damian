import React,{useState,useEffect} from "react"; 
import './styles.css';
import coin from '../../icons/coin.svg'

  function Users(){
    let [users, setUsers]=useState([]);

    useEffect(() => {
      let peticion = fetch("https://coding-challenge-api.aerolab.co/user/me",{
      headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      }
  }); 
      peticion
        .then((respuesta) => {
          return respuesta.json();  
        })
        .then((data) => {
          console.log(data)
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