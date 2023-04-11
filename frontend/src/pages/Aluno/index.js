import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./style.scss";
import aulaService from "../Aulas/service";

import GroupIcon from "@material-ui/icons/Group";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";

const Aluno = () => {
  const history = useHistory();

  const [aulas, setAulas] = useState([]);

  const listAula = () => {
    aulaService.list().then((response) => {
      setAulas(response.data);
    });
  };

  useEffect(() => {
    listAula();

    console.log(history.location.state);
  }, []);

  const sing = () => {
    history.push("/");
  };

  const aluno = () => {
    history.push("/aluno");
  };

  const restrito = () => {
    history.push("/dados");
  };

  const turma = () => {
    history.push("/turma");
  };

  return (
    <section className="sectionAluno">
      <div className="cardDireita">
        <div className="buttons">
          <button className="buttonAulas" onClick={aluno}>
            <LaptopChromebookIcon className="buttonIcon" />
            Aulas
          </button>
          <button className="buttonTurma" onClick={turma}>
            <GroupIcon className="buttonIcon" />
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
      <div className="cardEsquerda">
        <table className="tableAulas">
          <tr className="trTitulo">
            <td className="tdTitulo">Aula</td>
            <td className="tdTitulo">Professor</td>
            <td className="tdTitulo">Horário</td>
            <td className="tdTitulo">Data</td>
          </tr>

          {aulas.map((item) => (
            <tr className="trAulas">
              <td className="tdAulas">
                {" "}
                <a href={item.link}>{item.titulo}</a>{" "}
              </td>
              <td className="tdAulas">{item.professor}</td>
              <td className="tdAulas">{item.horario}</td>
              <td className="tdAulas">{item.data}</td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};
export default Aluno;
