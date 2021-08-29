import React from "react";
import "./styles/index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
library.add(fas);
function App() {
  return (
    <div className="App">
      <Menu defaultIndex="0" onSelect={(index) => alert(index)}>
        <MenuItem>0000</MenuItem>
        <MenuItem>ssss</MenuItem>
        <SubMenu title="子菜单"></SubMenu>
      </Menu>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}

      <Icon icon="arrow-down" theme="primary" size="10x" />
    </div>
  );
}

export default App;
