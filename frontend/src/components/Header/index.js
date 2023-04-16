import { useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory();

  const login = () => {
    history.push("/");
  };
    return (
        <div>
        <nav className="main-header navbar navbar-expand navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li>
       
    </ul>

    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
       <li className="nav-item">
        <a onClick={login()} className="nav-link btn btn-default" data-widget="pushmenu" href="#" role="button">Sair</a>
      </li>
   
     
    </ul>
  </nav>
    </div>
      );
  }
  
  export default Header;
  