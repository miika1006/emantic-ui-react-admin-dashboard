import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Rail, Header, Segment } from "semantic-ui-react";

export const Layout = ({ side, main }) => {
  const nosidePadding = { paddingLeft: "0", paddingRight: "0" };
  const minimumWindowHeight = { minHeight: "100vh", margin: "0" };
  const rail = { width: "100%", marginTop: "4em" };
  const noPadding = { padding: "0" };
  return (
    <Fragment>
      <Grid padded="horizontally" style={minimumWindowHeight}>
        <Grid.Row style={noPadding}>
          <Grid.Column
            width={3}
            tablet={4}
            computer={3}
            color="blue"
            style={nosidePadding}
            only="computer tablet"
          >
            <Segment basic>
              <Header as="h5" inverted>
                Admin Dashboard
              </Header>
            </Segment>

            <Rail position="left" attached internal style={rail}>
              {side}
            </Rail>
          </Grid.Column>
          <Grid.Column
            width={13}
            mobile={16}
            tablet={12}
            computer={13}
            style={nosidePadding}
          >
            {main}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

Layout.propTypes = {
  side: PropTypes.node,
  main: PropTypes.node
};
