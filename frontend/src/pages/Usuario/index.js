import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import aulaService from "../Aulas/service";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";

const Usuario = () => {
  const history = useHistory();
  const [aulas, setAulas] = useState([]);

  const novoUser = () => {
    history.push("/cadastro");
  };
  const novoAluno = () => {
    history.push("/cadastroAluno");
  };
  const novaAula = () => {
    history.push("./Aulas");
  };

  const Sing = () => {
    history.push("/");
  };

  const listarAulas = () => {
    aulaService.list().then((response) => {
      setAulas(response.data);
    });
  };

  useEffect(() => {
    listarAulas();
  }, []);

  return (
    <section className="sectionUsuario">
      <div className="perfil">
        <div className="pags">
          <button className="buttonAdd" onClick={novoUser}>
            <PersonAddIcon className="addAluno" />
            Novo professor
          </button>
          <button className="buttonAdd" onClick={novoAluno}>
            <LocalLibraryIcon />
            Novo aluno
          </button>
          <button className="buttonAdd" onClick={novaAula}>
            <QueuePlayNextIcon className="addAula" />
            Adicionar aula
          </button>
        </div>
        <div>
          <button className="sair" onClick={Sing}>
            Sair
          </button>
        </div>
      </div>

      <div className="divTable">
        <table className="tableProfessor">
          <tr className="trTitulo">
            <td className="tdTitulo">Titulo</td>
            <td className="tdTitulo">Professor</td>
            <td className="tdTitulo">Horário</td>
            <td className="tdTitulo">Data</td>
            <td className="tdTitulo">Ações</td>
          </tr>

          {aulas.map((item) => (
            <tr>
              <td className="tdAula">
                <a href={item.link}> {item.titulo}</a>
              </td>
              <td className="tdAula">{item.professor}</td>
              <td className="tdAula">{item.data}</td>
              <td className="tdAula">{item.horario}</td>
              <td className="tdAula">
                <button>
                  <DeleteIcon />
                </button>
                <button>
                  <EditIcon />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Usuario;
