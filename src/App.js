import React from "react";
import { Segment } from "semantic-ui-react";
import { TopMenu } from "./components/TopMenu";
import { SubMenu } from "./components/SubMenu";
import { Layout } from "./components/Layout";

const App = () => (
  <Layout side={<SubMenu />}>
    <TopMenu>
      <SubMenu />
    </TopMenu>
    <div>
      <Segment basic>Main content</Segment>
    </div>
  </Layout>
);

export default App;
