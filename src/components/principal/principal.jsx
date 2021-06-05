import React, { createContext } from "react";
import { Route, Switch } from "react-router-dom";
import Coins from "../../../src/pages/coins/coin";
import LoginCard from "../../../src/pages/login/log";
import Register from "../../../src/pages/register/register";
import Home from "../../../src/pages/home/home";
import NotFound from "../../../src/pages/404/notFound";
import History from "../../../src/pages/history/history";
import Contact from "../../../src/pages/contact/contac";


export const Context = createContext()
function Principal() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LoginCard} />
        <Route path="/coins" component={Coins} />
        <Route path="/history" component={History} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
export default Principal;
