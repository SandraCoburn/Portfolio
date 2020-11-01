import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

//components
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProjectList from "./Components/Projects/ProjectList";

//styles
import { GlobalStyle, Wrapper } from "./App.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <NavBar />
      </header>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <ProjectList />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;
