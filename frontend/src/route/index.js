import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Aluno from "../pages/Aluno";
import Turma from "../pages/Turma";
import Usuario from "../pages/Usuario";
import Cadastro from "../pages/Cadastro/Admin";
import CadastroAluno from "../pages/Cadastro/Aluno";
import Aulas from "../pages/Aulas";
import dadosPessoais from "../pages/DadosPessoais";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/turma" component={Turma} />
        <Route path="/aulas" component={Aulas} />
        <Route path="/admin" component={Usuario} />
        <Route path="/aluno" component={Aluno} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/cadastroAluno" component={CadastroAluno} />
        <Route path="/dados" component={dadosPessoais} />
      </Switch>
    </Router>
  );
};

export default Routes;
