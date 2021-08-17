import React from "react";
import "./styles/index.scss";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Menu defaultIndex="0" onSelect={(index) => alert(index)}>
        <MenuItem>0000</MenuItem>
        <MenuItem>ssss</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
