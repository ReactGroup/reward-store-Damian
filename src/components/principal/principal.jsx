import React from "react"; 
import { Route, Switch } from "react-router-dom";
import Home from '../home/home'; 
import Coins from '../coins/coin'; 
import NotFound from '../404/notFound'; 
import LoginCard from '../forms/login/log'; 
import History from '../history/history'; 
import Register from '../forms/register/register'; 
import Contact from '../forms/contact/contac'
function Principal(){
    return(
        <>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/home" component={Home} />
          <Route  path="/login" component={LoginCard} />
          <Route  path="/coins" component={Coins} />
          <Route  path="/history" component={History} />
          <Route  path="/register" component={Register} />
          <Route  path="/contact" component={Contact} />
          <Route component={NotFound}/>
    </Switch>
        </>
    )
}
export default Principal; 
