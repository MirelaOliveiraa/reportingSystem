import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";

import CadastroServices from "../services";

import "../style.scss";

const CadastroAluno = () => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aluno, setAluno] = useState(true);
  const [novoUsuario, setNovoUsuario] = useState("");

  const adicionarUAluno = () => {
    const payload = {
      nome: nome,
      email: email,
      senha: senha,
      aluno: aluno,
    };
    console.log(payload);

    CadastroServices.createAluno(payload).then(() => {
      toast.success("Aluno cadastrado");
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
          <button onClick={adicionarUAluno}>Cadastrar</button>
        </div>
      </div>
    </section>
  );
};

export default CadastroAluno;
