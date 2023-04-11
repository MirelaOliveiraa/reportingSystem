import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ChamadoServices from "../../service";
import "../../style/global.scss";

import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { toast, Toaster } from "react-hot-toast";
import EditIcon from "@material-ui/icons/Edit";
import { Table , Button, Modal} from "react-bootstrap";
import DoneIcon from "@material-ui/icons/Done";

import Menu from "../../components/Menu";
import { formatDate } from "../../utils/format-date";

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
    toast.success("Familia excluída com sucesso!");
    listarChamados();
  };

  useEffect(() => {
    listarChamados();
  }, []);

  return (
    <div className='container'>
      <Menu />
      <div className="section">
        <div className="card">
        <div>
          <h4>Filtros</h4>
          <div className="div-search">
            <input
              onChange={(event) => setResponsavel(event.target.value)}
              type="search"
              placeholder="Responsavel"
              
            />
            <input
              onChange={(event) => setDescricao(event.target.value)}
              placeholder="Descrição"
              type="search"
              
            />
            <input
              onChange={(event) => setDataCadastro(event.target.value)}
              type="date"
            />
            <input
              onChange={(event) => setDataAceite(event.target.value)}
              type="date"              
            />
            
            <button onClick={() => filtrar()}>
              <SearchIcon />
            </button>
          </div>
             
          <Table>
            <tbody>
              <tr>
                <th>Responsavel</th>
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
                    <>
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
                    </>
                    : <button variant="confirm">
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
