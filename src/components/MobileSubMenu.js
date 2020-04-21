import React, { useState } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";
import "./MobileSubMenu.css";
export const MobileSubMenu = () => {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState("users");

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
        className="mobilesubmenu"
      >
        <Menu.Item>
          <Header inverted={show} as="h3" className="mobilesubmenu-header">
            {activeItem}
          </Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="align right" color={!show ? menuColor : undefined} />
        </Menu.Item>
      </Menu>
      {show && (
        <Menu
          stackable
          color={menuColor}
          secondary
          inverted
          className="mobilesubmenu-list"
        >
          <Menu.Item
            active={activeItem === "users"}
            onClick={toggleMenu("users")}
          >
            <Icon name="users" />
            Users
          </Menu.Item>
          <Menu.Item
            active={activeItem === "logs"}
            onClick={toggleMenu("logs")}
          >
            <Icon name="file" />
            Logs
          </Menu.Item>
          <Menu.Item
            active={activeItem === "archive"}
            onClick={toggleMenu("archive")}
          >
            <Icon name="archive" />
            Archive
          </Menu.Item>
          <Menu.Item
            active={activeItem === "messages"}
            onClick={toggleMenu("messages")}
          >
            <Icon name="envelope" />
            Messages
          </Menu.Item>
        </Menu>
      )}
    </React.Fragment>
  );
};
