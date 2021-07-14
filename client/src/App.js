import "./styles/css/main.css";
import React from "react";
import { Container } from "@material-ui/core";
import Router from "./Router";
import Header from "./components/Header";

function App() {
  return (
    <Container className="App">
      <Header />
      <Router />
    </Container>
  );
}

export default App;
