import React from "react";
import { Container } from "semantic-ui-react";
import { TopMenu } from "./components/TopMenu";

const App = () => (
  <React.Fragment>
    <TopMenu />
    <Container>Main content</Container>
  </React.Fragment>
);

export default App;
