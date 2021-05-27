import React from "react";
import './styles.css'; 
import Menu from '../menu/menu'
import coin from '../../icons/coin.svg'
function Coin(){
    return(
    <>
    <Menu/>
     <div className="content-div" > 
        <div className="text-coin">
            <p className="text">It's Time to get more Coins!!!</p>    
            <p className="text">Click over one icon to Start!</p>
        </div>
          <div className="div-coins">                              
                 <ul className="list-coins">
                     <li className="list-coins-items"> <h2>500</h2>
                         <img src={coin} alt="" className="coins" />  </li>
                     <li className="list-coins-items"> <h2>1500</h2>
                         <img src={coin} alt="" className="coins" />  </li>
                     <li className="list-coins-items"> <h2>2500</h2>
                         <img src={coin} alt="" className="coins" />  </li></ul>  
                             </div>      
         </div>
         </>
     
    )
}

export default Coin; 