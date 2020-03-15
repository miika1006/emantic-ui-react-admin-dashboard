import React from "react";
import { Menu } from "semantic-ui-react";

export const DesktopSubMenu = () => {
  const borderRadiusZero = { borderRadius: "0" };
  return (
    <Menu inverted color="blue" vertical fluid style={borderRadiusZero}>
      <Menu.Item as="a">Submenu #1</Menu.Item>
      <Menu.Item as="a">Submenu #2</Menu.Item>
      <Menu.Item as="a">Submenu #3</Menu.Item>
      <Menu.Item as="a">Submenu #4</Menu.Item>
    </Menu>
  );
};
