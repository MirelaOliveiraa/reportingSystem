import React, { useEffect, useState } from "react";

import "./style.scss";
import usuarioService from "../Usuario/services";
import { useHistory } from "react-router-dom";

import GroupIcon from "@material-ui/icons/Group";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";

const Turma = () => {
  const history = useHistory();
  const [aluno, setAlunos] = useState([]);

  const sing = () => {
    history.push("/");
  };

  const restrito = () => {
    history.push("/dados");
  };

  const aulas = () => {
    history.push("/aluno");
  };

  const tela = () => {
    history.push("/turma");
  };

  const listarAlunos = () => {
    usuarioService.listAluno().then((response) => {
      setAlunos(response.data);
    });
  };

  useEffect(() => {
    listarAlunos();
  }, []);

  return (
    <section className="sectionTurma">
      <div className="cardEsquerda">
        <div className="buttons">
          <button className="buttonAulas" onClick={aulas}>
            <LaptopChromebookIcon className="buttonIcon" />
            Aulas
          </button>
          <button className="buttonTurma">
            <GroupIcon className="buttonIcon" onClick={tela} />
            Turma
          </button>
          <button className="dadosPessoais" onClick={restrito}>
            <FingerprintIcon className="buttonIcon" /> Espaço pessoal
          </button>
          <button className="buttonSing" onClick={sing}>
            <PowerSettingsNewIcon className="iconPower" />
          </button>
        </div>
      </div>
      <div className="cardAlunos">
        <ul className="ulTurma">
          {aluno.map((item) => (
            <li className="liTurma">
              <AccountCircleIcon className="perfil" />
              {item.nome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Turma;
