import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import usuarioService from "../Usuario/services.js";
import toast from "react-hot-toast";

const Home = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aluno, setAluno] = useState("");
  const [usuarios, setUsuarios] = useState("");

  const login = () => {
    usuarioService.list().then((response) => {
      setUsuarios(response.data);
      const filter = response.data.filter(
        (item) => item.email === email && item.senha === senha
      );

      usuarioService.listAluno().then((response) => {
        setAluno(response.data);
        const filterAluno = response.data.filter(
          (item) => item.email === email && item.senha === senha
        );

        const Admin = filter[0]?.admin;
        const Aluno = filterAluno[0]?.aluno;

        if (filter) {
          if (Admin) {
            history.push("/admin", filter[0].id);
          } else if (Aluno) {
            history.push("/aluno", filterAluno[0].id);
          } else {
            toast.error("Usuário não cadastrado");
          }
        }
      });
    });
  };

  return (
    <section className="sectionHome">
      <div className="card">
        <span className="span"> Acesse seu Cadastro</span>

        <div className="login">
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email"
            className="inputLogin"
            type="text"
          />
          <input
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Digite sua senha"
            className="inputLogin"
            type="password"
          />
        </div>
        <div>
          <button onClick={login} className="buttonLogin">
            Entrar
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
