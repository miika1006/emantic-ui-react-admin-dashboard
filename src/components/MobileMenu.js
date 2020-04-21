import React, { useState } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";
import "./MobileMenu.css";
export const MobileMenu = ({ children }) => {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleMenu = (item) => (event) => {
    setShow(!show);
    if (item) setActiveItem(item);
  };

  const menuColor = "grey";

  return (
    <React.Fragment>
      <Menu
        secondary
        onClick={toggleMenu()}
        inverted={show}
        color={show ? menuColor : undefined}
        className="mobilemenu"
      >
        <Menu.Item>
          <Header as="h1" inverted={show} className="mobilemenu-header">
            {activeItem}
          </Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="sidebar" color={!show ? menuColor : undefined} />
        </Menu.Item>
      </Menu>
      {show && (
        <Menu
          stackable
          color={menuColor}
          secondary
          inverted
          className="mobilemenu-list"
        >
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
            Logout
          </Menu.Item>
        </Menu>
      )}
      {children}
    </React.Fragment>
  );
};
