import "./styles/scss/main.scss";
import React from "react";

import Router from "./Router";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
