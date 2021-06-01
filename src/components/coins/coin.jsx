import React, {useEffect} from "react";
import './styles.css'; 
import Menu from '../menu/menu'
import coin from '../../icons/coin.svg'
function Coin(){
    // useEffect((points) => {
    //     let peticion = fetch("hhttps://coding-challenge-api.aerolab.co/user/pointss", {amount: points},{
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept" : "application/json",
    //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c"
    //     }
    // }); 
    //     peticion
    //       .then((respuesta) => {
    //         return respuesta.json();
    //       })
    //       .then((data) => {
    //     //    ????????'
    //       });
    //   }, []);

  
     const postUser = async (points) => {
        try{
            const response = fetch("hhttps://coding-challenge-api.aerolab.co/user/points", {amount: points},{
                headers: {
                         "Content-Type": "application/json",
                         "Accept" : "application/json",
                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c"
                     }
                 }); 
        }catch (error){
            console.error(error)
        }
      }

    

    return(
    <>
    <Menu/>
    <div className="content-div" > 
        <div className="text-coin">
            <p className="text">It's Time to get more Coins!!!</p>    
            <p className="text">Click over one icon to Start!</p>
        </div>
        <div className="div-coins">                              
            <div className="list-coins">
                <div className="item-coins">
                    <img src={coin} alt="" className="coins" />
                    <label for="1">1000</label> 
                    <input type="radio" id="1" className="input-coins" name="credit" value="1000" onClick={handleClick} />
                </div>
                <div className="item-coins">
                    <img src={coin} alt="" className="coins" />
                    <label for="2">5000</label>
                    <input type="radio" id="2" className="input-coins" name="credit" value="5000" onClick={handleClick} />
                </div>

                <div className="item-coins">
                    <img src={coin} alt="" className="coins" />
                    <label for="3">7500</label>
                    <input type="radio" id="3" className="input-coins" name="credit" value="7500" onClick={handleClick} />
                </div>
            </div> 
            <button>SUBMIT</button>
        </div>
    </div>      
    </>  
    )
    function handleClick(e){
        if (e.target.value === "1000"){
            postUser(1000); 
            console.log("click en 1") 
        }else if(e.target.value === "5000") {
            postUser(5000); 
            console.log("click en 2")
        }else if(e.target.value === "7500") {
            postUser(7500); 
            console.log("click en 3")
        }
    }
}
export default Coin; 


