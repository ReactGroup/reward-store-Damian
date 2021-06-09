import { HashRouter, Route, Switch } from "react-router-dom";
import Coins from "../coins/coin";
import LoginCard from "../login/log";
import Register from "../register/register";
import Home from "../home/home";
import NotFound from "../404/notFound";
import History from "../history/history";
import Contact from "../contact/contac";

function Principal() {
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    </>
  );
}
export default Principal;
