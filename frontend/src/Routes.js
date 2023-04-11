import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Editar from "./pages/Editar";
import Aceite from "./pages/Aceite";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastrar";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Editar/:id" component={Editar} />
        <Route exact path="/Aceite/:id" component={Aceite} />
        <Route exact path="/Cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
};
export default Routes;
