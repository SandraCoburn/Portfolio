import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './NavBar.css';
import {
  AppstoreOutlined,
  HomeOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const NavBar = () => {
  const [current, setCurrent] = useState('mail');
  const handleClick = (e) => {
    console.log('click ', e);
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
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="portfolio" icon={<AppstoreOutlined />}>
        <Link to="/portfolio">Portfolio</Link>
      </Menu.Item>
      <Menu.Item key="linkedIn" icon={<LinkedinOutlined />}>
        <a href="https://www.linkedin.com/in/sandra-coburn/">LinkedIn</a>
      </Menu.Item>
      <Menu.Item key="github" icon={<GithubOutlined />}>
        <a href="https://github.com/SandraCoburn">Github</a>
      </Menu.Item>
    </Menu>
  );
};
export default NavBar;
