import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Responsive } from "semantic-ui-react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const TopMenu = ({ children }) => (
  <Fragment>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <DesktopMenu>{children}</DesktopMenu>
    </Responsive>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileMenu>{children}</MobileMenu>
    </Responsive>
  </Fragment>
);
TopMenu.propTypes = {
  children: PropTypes.node
};
