import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoginServices from "../../serviceLogin";
import "../../style/global.scss";
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
    <div className="d-flex flex-column align-items-center">
<div className="login-box">
  <div className="login-logo">
   
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Faça o login para iniciar a sessão.</p>

      <div>
        <div className="input-group mb-3">
          <input required onChange={(event) => setLogin(event.target.value)} type="text" className="form-control" placeholder="Login"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input required type="password" className="form-control" placeholder="Password" onChange={(event) => setSenha(event.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
       
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block"  onClick={entrar}>Entrar</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>
    </div>
  );
};
export default Login;
