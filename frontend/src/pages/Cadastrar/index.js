import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import ChamadoServices from "../../service";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
    <h3 className="card-title">Cadastro de chamado</h3>
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
        onChange={(event) => setResponsavel(event.target.value)}
            value={responsavel}
             placeholder="Responsável" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descrição</Form.Label>
        <Form.Control   
          placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
            value={descricao}
             />
      </Form.Group>
      <Button variant="primary" type="submit" className="float-right"  onClick={() => adicionarChamado()}>
        Salvar
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

export default Cadastro;
