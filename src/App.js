import React from "react";
import {
  HashRouter as Routes,

} from "react-router-dom";
import "./App.css";
import Page from "./component/page.component";
import Home from "./page/home.page";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Page>
          <Home />
        </Page>
      </header>
    </div>
  );
}

export default App;
