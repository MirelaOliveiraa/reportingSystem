import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import aulaService from "./service";
import toast from "react-hot-toast";

const Aulas = () => {
  const history = useHistory();
  const [link, setLink] = useState("");
  const [titulo, setTitulo] = useState("");
  const [professor, setProfessor] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  const adcAula = () => {
    const payload = {
      link: link,
      titulo: titulo,
      professor: professor,
      data: data,
      horario: horario,
    };
    aulaService.create(payload).then(() => {
      toast.success("Aula cadastrada");
      history.push("/admin");
    });
  };

  return (
    <section className="sectionAula">
      <div className="formAula">
        <h4>Adicionar Aula</h4>
        <input
          placeholder="Adicione o link"
          type="url"
          onChange={(event) => setLink(event.target.value)}
          className="inputForm"
        />
        <input
          placeholder="Titulo"
          type="url"
          onChange={(event) => setTitulo(event.target.value)}
          className="inputForm"
        />
        <input
          placeholder="Insira seu nome"
          type="text"
          onChange={(event) => setProfessor(event.target.value)}
          className="inputForm"
        />
        <input
          placeholder="Informe o horário"
          type="time"
          onChange={(event) => setHorario(event.target.value)}
          className="inputForm"
        />
        <input
          placeholder="Data do evento"
          type="date"
          onChange={(event) => setData(event.target.value)}
          className="inputForm"
        />
        <div>
          <button className="addAula" onClick={adcAula}>
            Confirmar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aulas;
