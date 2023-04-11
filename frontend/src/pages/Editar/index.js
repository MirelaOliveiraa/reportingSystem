import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/Done";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ChamadoServices from "../../service";
import Menu from "../../components/Menu";

const Editar = () => {
  const params = useParams();
  const history = useHistory();
  const listarChamados = () => {};

  const [chamado, setChamado] = useState([]);

  const editarFamilia = async (item) => {
console.log(item)

    const payload = {
      id: item.id,
      responsavel: item.responsavel,
      descricao: item.descricao,
      dataCadastro: item.dataCadastro,
      aceite: false,
    };
    await ChamadoServices.update(payload);
    toast.success("Edição executada, retorne para a página inicial.");
    // listarChamados();
  };

  useEffect(() => {
    listarChamados();

    if (params.id) {
      ChamadoServices.list().then((response) => {
        const filter = response.data.filter((item) => item.id == params.id);
        setChamado(filter[0]);
      });
    }
  }, []);

  const direct = () => {
    history.push("/Home");
  };

  return (
    <div className="container">

<Menu />
      <div className="section">
        <div className="card">
    <h2>Edição de chamado</h2>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Responsavel</Form.Label>
        <Form.Control   
         value={chamado.responsavel}
          onChange={(event) =>
            setChamado({
              ...chamado,
              responsavel: event.target.value,
            })
          }
          type="text"
             placeholder="Responsavel" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Responsavel</Form.Label>
        <Form.Control   
       value={chamado.descricao}
          onChange={(event) =>
            setChamado({
              ...chamado,
              descricao: event.target.value,
            })
          }
          type="text"
             placeholder="Descrição" />
      </Form.Group>
      
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Data Cadastro</Form.Label>
        <Form.Control   
            value={chamado.dataCadastro}
          onChange={(event) =>
            setChamado({
              ...chamado,
              dataCadastro: event.target.value,
            })
          }
          type="date"
             />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={() => editarFamilia(chamado)}>
        Editar
      </Button>
      <Button variant="secondary" type="submit" onClick={() => direct()} >
        Voltar
      </Button>
    </Form>
          
        </div>
      </div>
    </div>
  );
};

export default Editar;
