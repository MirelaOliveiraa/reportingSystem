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
import { formatDate } from "../../utils/format-date";

const Aceite = () => {
  const params = useParams();
  const history = useHistory();
  const listarChamados = () => {};

  const [chamado, setChamado] = useState([]);

  const aceitarChamado = async (item) => {
    const payload = {
      id: item.id,
      responsavel: item.responsavel,
      descricao: item.descricao,
      dataCadastro: item.dataCadastro,
      dataAceite: new Date(),
      aceite: true,
    };
    await ChamadoServices.update(payload);
    toast.success("Chamado aceito, retorne para a página inicial.");
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
    <h2>Aceitar chamado</h2>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Responsavel</Form.Label>
        <Form.Control   
        disabled
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
        <Form.Label>Descrição</Form.Label>
        <Form.Control   
        disabled
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
        disabled
            value={formatDate(chamado.dataCadastro)}
          onChange={(event) =>
            setChamado({
              ...chamado,
              dataCadastro: event.target.value,
            })
          }
             />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={() => aceitarChamado(chamado)}>
        Aceitar chamado
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

export default Aceite;
