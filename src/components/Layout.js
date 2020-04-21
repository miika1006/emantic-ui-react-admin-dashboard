import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Rail, Header, Segment, Icon } from "semantic-ui-react";
import "./Layout.css";
export const Layout = ({ side, children }) => {
  return (
    <Fragment>
      <Grid padded="horizontally" className="layout-grid">
        <Grid.Row className="layout-grid-row">
          <Grid.Column
            tablet={2}
            computer={2}
            largeScreen={1}
            color="grey"
            only="computer tablet"
          >
            <Rail position="left" attached internal className="layout-rail">
              <Segment
                basic
                inverted
                color="grey"
                className="layout-admin-title"
              >
                <Header as="h5" textAlign={"center"} icon size="tiny">
                  <Icon name="adn" />
                </Header>
              </Segment>

              {side}
            </Rail>
          </Grid.Column>

          <Grid.Column
            mobile={16}
            tablet={14}
            computer={14}
            largeScreen={15}
            className="layout-main-column"
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
