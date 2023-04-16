import React from "react";
import "./style/global.scss";
import Routes from "./Routes";
import { toast, Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return ( 
      <div>
      <div>
        <Routes />
      </div>
      <Toaster position="top-right" />
      </div>

  );
}

export default App;
