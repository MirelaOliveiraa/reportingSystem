import React from 'react';
import { useHistory, useParams } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const home = () => {
    history.push("/Home");
  };
  
  const cadastro = () => {
    history.push("/Cadastro");
  };


  return(
    <div >

<aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a onClick={() => home()} className="brand-link">
      <img src="https://cdn.mooble.com/contents/931061a9c5452a51f8edf74864d5e60a.png" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
      <span className="brand-text font-weight-light">Chamados</span>
    </a>

    <div className="sidebar">
     
      

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-item" onClick={() => cadastro()}  >
            <a className="nav-link">
              <i className="nav-icon fas fa-clipboard-list" style={{color: "#ffffff"}}></i>
              <p>
          Abrir solicitação
              </p>
            </a>
          </li>
           <li className="nav-item" onClick={() => home()} >
            <a className="nav-link">
              <i className="nav-icon fas fa-ellipsis-v" style={{color: "#ffffff"}}></i>
              <p>
          Relatorio
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>

    </div>
  );
};

export default Menu;