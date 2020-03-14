import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Responsive } from "semantic-ui-react";
import { DesktopSubMenu } from "./DesktopSubMenu";

export const SubMenu = ({ children }) => (
  <Fragment>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <DesktopSubMenu>{children}</DesktopSubMenu>
    </Responsive>
  </Fragment>
);

SubMenu.propTypes = {
  children: PropTypes.node
};
