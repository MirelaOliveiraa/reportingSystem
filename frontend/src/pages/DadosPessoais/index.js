import React, { useEffect, useState } from "react";

import usuarioService from "../Usuario/services";

const DadosPessoais = () => {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [aluno, setAlunos] = useState([]);

  const DadosUsuario = () => {
    usuarioService.listAluno().then((response) => {
      setAlunos(response.data);
    });
  };
  useEffect(() => {
    DadosUsuario();
  }, []);

  return (
    <section>
      <div>
        {aluno.map((item) => (
          <ul>
            <li>{item.nome}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};
export default DadosPessoais;
