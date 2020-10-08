import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <>
      <Menu inverted>
        <Menu.Item>
          <h1 id="header">El Gaucho Nyheter</h1>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
