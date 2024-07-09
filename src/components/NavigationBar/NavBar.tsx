import { useState } from "react";
import { Badge, Button, Avatar, Space } from "antd";
import {
  CloseOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import "../../styles/navbar.css";

const menuItems = [
  {
    title: "Home",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Services",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Products",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Contact",
    url: "#",
    cName: "nav-links"
  }
];

const Header = () => {
  return (
    <Space size={30}>
      <Badge count={1}>
        <Avatar
          shape="square"
          icon={<ShoppingCartOutlined style={{ fontSize: "30px" }} />}
        />
      </Badge>
      <Button type="primary">SIGN UP</Button>
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
      <h1 className="navbar-logo">
        React <i className="fab fa-react"></i>
      </h1>
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
            <a href={item.url} className={item.cName}>
              {item.title}
            </a>
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
