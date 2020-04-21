import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Rail, Header, Segment, Icon } from "semantic-ui-react";
import "./Layout.css";
export const Layout = ({ side, children }) => {
  const [show, toggleSide] = useState(true);
  const toggleMenu = (item) => (event) => {
    toggleSide(!show);
  };
  return (
    <Fragment>
      <Grid padded="horizontally" className="layout-grid">
        <Grid.Row className="layout-grid-row">
          <Grid.Column
            tablet={4}
            computer={3}
            largeScreen={show ? 2 : 1}
            color="grey"
            only="computer tablet"
            className="layout-side-column"
          >
            <Rail position="left" attached internal className="layout-rail">
              <Segment
                basic
                inverted
                color="grey"
                className="layout-admin-title"
              >
                <Header
                  as="h5"
                  onClick={toggleMenu()}
                  textAlign={show ? undefined : "center"}
                >
                  <Icon name="adn" />
                  {show && "Admin Dashboard"}
                </Header>
              </Segment>

              {side}
            </Rail>
          </Grid.Column>

          <Grid.Column
            mobile={16}
            tablet={12}
            computer={13}
            largeScreen={show ? 14 : 15}
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
