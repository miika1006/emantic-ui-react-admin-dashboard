import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const SubMenu = ({ children }) => <Fragment>{children}</Fragment>;
SubMenu.propTypes = {
  children: PropTypes.node
};
