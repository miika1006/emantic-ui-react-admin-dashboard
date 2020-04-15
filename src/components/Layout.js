import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Rail, Header, Segment, Icon } from "semantic-ui-react";

export const Layout = ({ side, children }) => {
  const menuColor = "grey";
  const nosidePadding = { paddingLeft: "0", paddingRight: "0" };
  const minimumWindowHeightAndAlign = { minHeight: "100vh", margin: "0" };
  const fullWidthAndAlignTop = { width: "100%", paddingTop: "4em" };
  const noPadding = { padding: "0" };
  return (
    <Fragment>
      <Grid padded="horizontally" style={minimumWindowHeightAndAlign}>
        <Grid.Row style={noPadding}>
          <Grid.Column
            tablet={4}
            computer={3}
            largeScreen={2}
            color={menuColor}
            style={nosidePadding}
            only="computer tablet"
          >
            <Segment basic>
              <Header as="h5" inverted>
                <Icon name="adn" />
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
            mobile={16}
            tablet={12}
            computer={13}
            largeScreen={14}
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
  children: PropTypes.node,
};
