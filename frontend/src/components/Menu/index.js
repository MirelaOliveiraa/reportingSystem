import React from 'react';
import { useHistory, useParams } from "react-router-dom";

import './style.css';

const Menu = () => {
  const history = useHistory();

  const home = () => {
    history.push("/Home");
  };
  
  const cadastro = () => {
    history.push("/Cadastro");
  };


  return(
    <div className='container-menu'>
      <ul>
        <li onClick={() => cadastro()}   >
          <a>
          Abrir solicitação
          </a>
          </li>
        <li onClick={() => home()} >
          <a>
          Relatorio
          </a>
          </li>
      </ul>
    </div>
  );
};

export default Menu;