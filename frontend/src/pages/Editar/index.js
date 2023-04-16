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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { formatDate } from "../../utils/format-date";


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
     <div>
<Menu />
<Header />

<div  className="content-wrapper">
  
   <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
            </ol>
          </div>
        </div>
      </div>
    </div>
  <div  className="content">

     <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12"></div>
           <div className="card">
             <div className="card-header border-0">
                <div className="d-flex justify-content-between">
    <h3 className="card-title">Editar chamado</h3>
 <div className="card-tools">
    <Button variant="secondary" type="submit" onClick={() => direct()} >
        Voltar
      </Button>
                </div>
                </div>
              </div>
            <div className="card-body">

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Responsável</Form.Label>
        <Form.Control   
         value={chamado.responsavel}
          onChange={(event) =>
            setChamado({
              ...chamado,
              responsavel: event.target.value,
            })
          }
          type="text"
             placeholder="Responsável" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Responsável</Form.Label>
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
      <Button variant="primary" type="submit" className="float-right" onClick={() => editarFamilia(chamado)}>
        Editar
      </Button>
  
    </Form>
     
            </div>
           </div>
            </div>
            </div>
 

  </div>
</div>
 <aside className="control-sidebar control-sidebar-dark">
  </aside>
<Footer />
    </div>
  );
};

export default Editar;
