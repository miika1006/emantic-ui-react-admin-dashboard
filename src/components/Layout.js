import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Rail, Header, Segment } from "semantic-ui-react";

export const Layout = ({ side, children }) => {
  const nosidePadding = { paddingLeft: "0", paddingRight: "0" };
  const minimumWindowHeightAndAlign = { minHeight: "100vh", margin: "0" };
  const fullWidthAndAlignTop = { width: "100%", marginTop: "4em" };
  const noPadding = { padding: "0" };
  return (
    <Fragment>
      <Grid padded="horizontally" style={minimumWindowHeightAndAlign}>
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

            <Rail
              position="left"
              attached
              internal
              style={fullWidthAndAlignTop}
            >
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
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

Layout.propTypes = {
  side: PropTypes.node,
  children: PropTypes.node
};
