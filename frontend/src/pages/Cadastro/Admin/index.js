import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";

import CadastroServices from "../services";

import "../style.scss";

const Cadastro = () => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [admin, setAdmin] = useState(true);
  const [novoUsuario, setNovoUsuario] = useState("");

  const adicionarUsuarios = () => {
    const payload = {
      nome: nome,
      email: email,
      senha: senha,
      admin: admin,
    };
    console.log(payload);

    CadastroServices.create(payload).then(() => {
      toast.success("Professor Cadastrado");
      setNovoUsuario("");
      Return();
    });
  };

  const Return = () => {
    history.push("/admin");
  };

  return (
    <section className="sectionCadastro">
      <div className="novoUser">
        <input
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome"
          className="inputNovoUser"
          type="text"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="inputNovoUser"
          type="email"
        />
        <input
          onChange={(event) => setSenha(event.target.value)}
          placeholder="Senha"
          className="inputNovoUser"
          type="password"
        />

        <div className="buttons">
          <button onClick={Return} className="return">
            Voltar
          </button>
          <button onClick={adicionarUsuarios}>Cadastrar</button>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
