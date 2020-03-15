import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";
import { TopMenu } from "./components/TopMenu";
import { SubMenu } from "./components/SubMenu";
import { Layout } from "./components/Layout";

const App = () => (
  <Layout
    side={<SubMenu />}
    main={
      <Fragment>
        <TopMenu />
        <div>
          <Segment basic>Main content</Segment>
        </div>
      </Fragment>
    }
  />
);

export default App;
