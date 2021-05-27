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
          <Route exact path="/" component={LoginCard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/coins" component={Coins} />
          <Route exact path="/history" component={History} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound}/>
    </Switch>
        </>
    )
}
export default Principal; 