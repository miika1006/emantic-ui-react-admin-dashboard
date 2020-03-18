import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

export const DesktopMenu = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const menuColor = "grey";
  const toggleMenu = item => event => {
    if (item) setActiveItem(item);
  };
  const borderRadiusZero = { borderRadius: "0" };
  return (
    <Menu inverted color={menuColor} fluid style={borderRadiusZero}>
      <Menu.Item
        active={activeItem === "dashboard"}
        onClick={toggleMenu("Dashboard")}
      >
        <Icon name="dashboard" />
        Dashboard
      </Menu.Item>
      <Menu.Item
        active={activeItem === "Warehouse"}
        onClick={toggleMenu("warehouse")}
      >
        <Icon name="warehouse" />
        Warehouse
      </Menu.Item>
      <Menu.Item
        active={activeItem === "reports"}
        onClick={toggleMenu("Reports")}
      >
        <Icon name="line graph" />
        Reports
      </Menu.Item>
      <Menu.Item
        active={activeItem === "settings"}
        onClick={toggleMenu("Settings")}
      >
        <Icon name="settings" />
        Settings
      </Menu.Item>
      <Menu.Item position="right" onClick={toggleMenu()}>
        <Icon name="sign-out" />
      </Menu.Item>
    </Menu>
  );
};
