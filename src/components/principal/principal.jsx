import React from "react"; 
import { Route, Switch } from "react-router-dom";

import Coins from '../coins/coin'; 
import LoginCard from '../forms/login/log'; 
import Register from '../forms/register/register'; 
import Home from '../../../src/pages/home/home'; 
import NotFound from '../../../src/pages/404/notFound'; 
import History from '../../../src/pages/history/history'; 
import Contact from '../../../src/pages/contact/contac';
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
