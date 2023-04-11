import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import ChamadoServices from "../../service";
import Menu from "../../components/Menu";

import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import DoneIcon from "@material-ui/icons/Done";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Cadastro = () => {
  const history = useHistory();
  const [responsavel, setResponsavel] = useState([]);
  const [descricao, setDescricao] = useState([]);
  const [date, setDate] = useState([]);

  const direct = () => {
    history.push("/Home");
  };

  const adicionarChamado = async (data) => {
    const payload = {
      responsavel: responsavel,
      descricao: descricao,
      dataCadastro: new Date(),
      dataAceite: "",
      aceite: false,
    };

    await ChamadoServices.create(payload);
    toast.success("Você adicionou uma nova solicitação!");
    setResponsavel("");
    setDescricao("");
    setDate("");

  };

  return (
    <div className="container">
<Menu />

<div className="section">
  <div className="card">
    <h2>Cadastro de chamado</h2>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Responsavel</Form.Label>
        <Form.Control   
        onChange={(event) => setResponsavel(event.target.value)}
            value={responsavel}
             placeholder="Responsavel" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descrição</Form.Label>
        <Form.Control   
          placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
            value={descricao}
             />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={() => adicionarChamado()}>
        Salvar
      </Button>
      <Button variant="secondary" type="submit" onClick={() => direct()} >
        Voltar
      </Button>
    </Form>



{/* 
<div className=" div-cad">
          <h2 className="h2-cad">Cadastrar</h2>
          <input
            className="input-cad"
            placeholder="Responsavel"
            type="text"
            onChange={(event) => setResponsavel(event.target.value)}
            value={responsavel}
          />

 <input
            className="input-cad"
            type="text"
              placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
            value={descricao}
          />
          
          <button className="but-cad" onClick={() => adicionarChamado()}>
            Salvar
            <DoneIcon />
          </button>
          <button onClick={() => direct()} className="but-cad">
            <KeyboardReturnIcon />
            Voltar
          </button>
        </div> */}
  </div>
</div>

    </div>
  );
};

export default Cadastro;
