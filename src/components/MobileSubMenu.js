import React, { useState } from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

export const MobileSubMenu = () => {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState("Submenu #1");

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
          <Header inverted={show} as="h3" style={capitalize}>
            {activeItem}
          </Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="align right" color={!show ? menuColor : undefined} />
        </Menu.Item>
      </Menu>
      {show && (
        <Menu stackable color={menuColor} secondary inverted style={nomargin}>
          <Menu.Item
            active={activeItem === "Submenu #1"}
            onClick={toggleMenu("Submenu #1")}
          >
            Submenu #1
          </Menu.Item>
          <Menu.Item
            active={activeItem === "Submenu #2"}
            onClick={toggleMenu("Submenu #2")}
          >
            Submenu #2
          </Menu.Item>
          <Menu.Item
            active={activeItem === "Submenu #3"}
            onClick={toggleMenu("Submenu #3")}
          >
            Submenu #3
          </Menu.Item>
          <Menu.Item
            active={activeItem === "Submenu #4"}
            onClick={toggleMenu("Submenu #4")}
          >
            Submenu #4
          </Menu.Item>
        </Menu>
      )}
    </React.Fragment>
  );
};
