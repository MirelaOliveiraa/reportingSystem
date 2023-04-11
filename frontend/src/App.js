import React from "react";
import toast, { Toaster } from "react-hot-toast";

import "./style/global.scss";
import Routes from "./route";

const App = () => {
  return (
    <section className="sectionApp">
      <div>
        <Routes />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};
export default App;
