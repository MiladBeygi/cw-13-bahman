import "./App.css";
import React, { Fragment } from "react";
import EditeUser from "./components/EditeUser";
import ViewUsers from "./components/ViewUsers";

function App() {
  return (
    <Fragment>
      <div className="continer">
        <EditeUser />
        <ViewUsers />
      </div>
    </Fragment>
  );
}

export default App;
