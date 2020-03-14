import React, { useState } from "react";
import { Menu, Icon, Container } from "semantic-ui-react";

export const DesktopMenu = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleMenu = item => event => {
    if (item) setActiveItem(item);
  };

  return (
    <Menu inverted color="blue" fluid style={{ borderRadius: "0" }}>
      <Container>
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
      </Container>
    </Menu>
  );
};
