import { useState } from "react";
import { Badge, Avatar, Space } from "antd";
import {
  CloseOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from "@ant-design/icons";
import "../../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo-black.png";

const menuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links"
  },
  {
    title: "Services",
    url: "/service",
    cName: "nav-links"
  },
  {
    title: "Products",
    url: "/products",
    cName: "nav-links"
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links"
  }
];

const Header = () => {
  return (
    <Space size={20}>
      <Badge count={1}>
        <Avatar
          shape="square"
          icon={<ShoppingCartOutlined style={{ fontSize: "30px" }} />}
        />
      </Badge>
      <Link to="/login">
        <Avatar
          shape="square"
          icon={<UserOutlined style={{ fontSize: "30px" }} />}
        />
      </Link>
    </Space>
  );
};

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img style={{ width: "100px" }} src={logo} alt="logo" />
      </Link>
      {/* <h1 className="navbar-logo">
        React <i className="fab fa-react"></i>
      </h1> */}
      <div className="menu-icon" onClick={handleClick}>
        {active ? (
          <CloseOutlined style={{ color: "#fff" }} />
        ) : (
          <MenuUnfoldOutlined style={{ color: "#fff" }} />
        )}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.url} className={item.cName}>
              {item.title}
            </NavLink>
          </li>
        ))}
        <li className="nav-links-mobile">
          <a href="">
            <Header />
          </a>
        </li>
      </ul>
      <div className="btn-sign-up">
        <Header />
      </div>
    </nav>
  );
};

export default NavBar;
