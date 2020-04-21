import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./DesktopMenu.css";

export const DesktopMenu = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const toggleMenu = (item) => (event) => {
    if (item) setActiveItem(item);
  };
  return (
    <Menu color="grey" fluid className="desktopmenu">
      <Menu.Item
        active={activeItem === "dashboard"}
        onClick={toggleMenu("dashboard")}
      >
        <Icon name="dashboard" />
        Dashboard
      </Menu.Item>
      <Menu.Item
        active={activeItem === "warehouse"}
        onClick={toggleMenu("warehouse")}
      >
        <Icon name="warehouse" />
        Warehouse
      </Menu.Item>
      <Menu.Item
        active={activeItem === "reports"}
        onClick={toggleMenu("reports")}
      >
        <Icon name="line graph" />
        Reports
      </Menu.Item>
      <Menu.Item
        active={activeItem === "settings"}
        onClick={toggleMenu("settings")}
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
