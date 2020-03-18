import React, { useState } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

export const MobileMenu = ({ children }) => {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const toggleMenu = item => event => {
    setShow(!show);
    if (item) setActiveItem(item);
  };

  const menuColor = "grey";
  const nomargin = { margin: "0" };
  const capitalize = { textTransform: "capitalize" };

  return (
    <React.Fragment>
      <Menu
        secondary
        onClick={toggleMenu()}
        inverted={show}
        color={show ? menuColor : undefined}
        style={nomargin}
      >
        <Menu.Item>
          <Header as="h1" inverted={show} style={capitalize}>
            {activeItem}
          </Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="sidebar" color={!show ? menuColor : undefined} />
        </Menu.Item>
      </Menu>
      {show && (
        <Menu stackable color={menuColor} secondary inverted style={nomargin}>
          <Menu.Item
            active={activeItem === "Dashboard"}
            onClick={toggleMenu("Dashboard")}
          >
            <Icon name="dashboard" />
            Dashboard
          </Menu.Item>
          <Menu.Item
            active={activeItem === "Warehouse"}
            onClick={toggleMenu("Warehouse")}
          >
            <Icon name="warehouse" />
            Warehouse
          </Menu.Item>
          <Menu.Item
            active={activeItem === "Reports"}
            onClick={toggleMenu("Reports")}
          >
            <Icon name="line graph" />
            Reports
          </Menu.Item>
          <Menu.Item
            active={activeItem === "Settings"}
            onClick={toggleMenu("Settings")}
          >
            <Icon name="settings" />
            Settings
          </Menu.Item>
          <Menu.Item position="right" onClick={toggleMenu()}>
            <Icon name="sign-out" />
            Logout
          </Menu.Item>
        </Menu>
      )}
      {children}
    </React.Fragment>
  );
};
