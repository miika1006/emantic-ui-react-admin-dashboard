import React from "react";
import { Container } from "semantic-ui-react";
import { TopMenu } from "./components/TopMenu";
import { SubMenu } from "./components/SubMenu";

const App = () => (
  <React.Fragment>
    <TopMenu />
    <SubMenu />
    <Container>Main content</Container>
  </React.Fragment>
);

export default App;
