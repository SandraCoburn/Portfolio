import React, { useState } from "react";
import { Menu } from "antd";
import "./NavBar.css";
import {
  AppstoreOutlined,
  HomeOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      className="navBar"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="portfolio" icon={<AppstoreOutlined />}>
        Portfolio
      </Menu.Item>
      <Menu.Item key="linkedIn" icon={<LinkedinOutlined />}>
        <a href="https://www.linkedin.com/in/sandra-coburn/">
          <span class="label">LinkedIn</span>
        </a>
      </Menu.Item>
      <Menu.Item key="github" icon={<GithubOutlined />}>
        <a href="https://github.com/SandraCoburn">
          <span class="label">Github</span>
        </a>
      </Menu.Item>
    </Menu>
  );
};
export default NavBar;
