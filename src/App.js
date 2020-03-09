import React from "react";
import { Menu, Icon, Container } from "semantic-ui-react";

const TopMenu = ({ props }) => (
  <Menu>
    <Container main>
      <Menu.Item active={true}>
        <Icon name="dashboard" />
        Dashboard
      </Menu.Item>
      <Menu.Item>
        <Icon name="warehouse" />
        Warehouse
      </Menu.Item>
      <Menu.Item>
        <Icon name="line graph" />
        Reports
      </Menu.Item>
      <Menu.Item>
        <Icon name="settings" />
        Settings
      </Menu.Item>
    </Container>
  </Menu>
);

const App = () => (
  <>
    <TopMenu />
    <Container main>Main content</Container>
  </>
);

export default App;
