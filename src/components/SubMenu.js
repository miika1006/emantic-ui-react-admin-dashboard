import React, { Fragment } from "react";
import { Responsive } from "semantic-ui-react";
import { DesktopSubMenu } from "./DesktopSubMenu";

export const SubMenu = () => {
  return (
    <Fragment>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopSubMenu />
      </Responsive>
    </Fragment>
  );
};
