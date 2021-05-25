import React from "react"; 
import { Route, Switch } from "react-router-dom";
import Home from '../home/home'
function Principal(){
    return(
        <>
    <Switch>
          <Route exact path="/" component={Home} />
    </Switch>
        </>
    )
}
export default Principal; 