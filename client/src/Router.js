import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home";

export default function Router() {
  return (
    <Container className="Router">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}
