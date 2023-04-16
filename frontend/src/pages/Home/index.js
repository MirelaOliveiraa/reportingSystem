import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ChamadoServices from "../../service";

import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { toast, Toaster } from "react-hot-toast";
import EditIcon from "@material-ui/icons/Edit";
import { Table , Button, Modal} from "react-bootstrap";
import DoneIcon from "@material-ui/icons/Done";
import Form from 'react-bootstrap/Form';
import Menu from "../../components/Menu";
import { formatDate } from "../../utils/format-date";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  const [chamados, setChamados] = useState([]);
  const [responsavel, setResponsavel] = useState([]);
  const [descricao, setDescricao] = useState([]);
  const [dataCadastro, setDataCadastro] = useState([]);
  const [dataAceite, setDataAceite] = useState([]);

  const { id } = useParams();
  const history = useHistory();

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(true);


  const Editar = (id) => {
    history.push(`/Editar/${id}`);
    console.log(id);
  };
  
  const Aceitar = (id) => {
    history.push(`/Aceite/${id}`);
    console.log(id);
  };

  const filtrar = () => {
      ChamadoServices.search(responsavel, descricao, dataCadastro, dataAceite).then((response) => setChamados(response.data));
  };

  const listarChamados = () => {
    ChamadoServices.list().then((response) => setChamados(response.data));
  };

  const apagarChamado = async (id) => {
    await ChamadoServices.delete(id);
    handleClose();
    toast.success("Chamado excluído com sucesso!");
    listarChamados();
  };

  useEffect(() => {
    listarChamados();
  }, []);

  return (
    <div >
      <Menu />
      <Header/>
     
<div className="content-wrapper">

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
  <div className="content">
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
            <div className="card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h3 className="card-title"> Lista de chamados</h3>
                </div>
              </div>
              <div className="card-body">
                 <div className="d-flex">
            <Form.Control 
              onChange={(event) => setResponsavel(event.target.value)}
              type="search"
              placeholder="Responsável"
              className="m-1"
            />
            <Form.Control 
              onChange={(event) => setDescricao(event.target.value)}
              placeholder="Descrição"
              type="search"
              className="m-1"
              
            />
            <Form.Control 
              onChange={(event) => setDataCadastro(event.target.value)}
              type="date"
              className="m-1"
            />
            <Form.Control 
              onChange={(event) => setDataAceite(event.target.value)}
              type="date"     
              className="m-1"

            />
            
            <button className="btn btn-primary m-1" onClick={() => filtrar()}>
              <SearchIcon />
            </button>
          </div>
               <Table>
            <tbody>
              <tr>
                <th>Responsável</th>
                <th>Descrição</th>
                <th>Data Cadastro</th>
                <th>Data Aceite</th>
                <th>Ações</th>
                <td></td>
              </tr>

              {chamados.map((item) => (
                <tr>
                  <td>{item.responsavel}</td>
                  <td>{item.descricao}</td>
                  <td>{formatDate(item.dataCadastro)}</td>
                  <td>{formatDate(item.dataAceite)}</td>
                  <td>
                    {item.aceite == false ?
                    <div div className="btn-group ">
                    <Button 
                      variant="primary"
                    onClick={() => Editar(item.id)}>
                      <EditIcon />
                    </Button>

                    <Button
                      variant="danger"
                      className="but-del"
                      onClick={() => handleShow(item.id)}
                    >
                      <DeleteIcon />
                    </Button>
                      <Button
                      variant="primary"
                      className="but-del"
                       onClick={() => Aceitar(item.id)}>
                     Aceitar
                    </Button>
                    </div>
                    : <button className="btn btn-block btn-success disabled">
                    <DoneIcon />
                    </button>
                    } 

                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
              </div>
            </div>

          </div>
        </div>
</div>
</div>
</div>
 <aside className="control-sidebar control-sidebar-dark">
  </aside>
<Footer />

{chamados.map((item) => (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja excluir esse chamado?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => apagarChamado(item.id)}>
            Apagar
          </Button>
        </Modal.Footer>
      </Modal>
))}
    </div>
  );
};
export default Home;
