import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./DesktopSubMenu.css";
export const DesktopSubMenu = () => {
  return (
    <Menu
      icon="labeled"
      inverted
      color="grey"
      vertical
      fluid
      className="desktop-submenu"
    >
      <Menu.Item as="a">
        <Icon name="users" />
        Users
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="file" />
        Logs
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="archive" />
        Archive
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="envelope" />
        Messages
      </Menu.Item>
    </Menu>
  );
};
