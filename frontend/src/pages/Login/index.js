import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoginServices from "../../serviceLogin";
import "../../style/global.scss";
import { Button } from "react-bootstrap";

const Login = () => {
 const history = useHistory();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState("");

  const entrar = () => {
    LoginServices.list().then((response) => {
      setUsuarios(response.data);

      const user = response.data.find(
        (item) => item.login === login && item.senha === senha
      );
      
        if (user) {
            history.push("/Home");
          } else {
            alert("Usuário não cadastrado");
          }
        
      });
  };

  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <label>Login:</label>
          <input onChange={(event) => setLogin(event.target.value)} type="text"/>
          <label>Senha:</label>
          <input onChange={(event) => setSenha(event.target.value)} type="password"/>
          <br/>
          <Button variant="primary" onClick={entrar}> Entrar</Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
