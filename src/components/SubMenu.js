import React, { Fragment } from "react";
import { Responsive } from "semantic-ui-react";
import { DesktopSubMenu } from "./DesktopSubMenu";
import { MobileSubMenu } from "./MobileSubMenu";

export const SubMenu = () => {
  return (
    <Fragment>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopSubMenu />
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileSubMenu />
      </Responsive>
    </Fragment>
  );
};
