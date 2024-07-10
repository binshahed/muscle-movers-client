import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.png";
import payment from "../../assets/payment-method.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Row gutter={10}>
          <Col span={24} md={8} lg={8}>
            <p className="footer-heading">Company</p>
            <p className="footer-link">
              <Link to="">Home</Link>
            </p>
            <p className="footer-link">
              <Link to="">About Us</Link>
            </p>
            <p className="footer-link">
              <Link to="">Cart</Link>
            </p>
            <p className="footer-link">
              <Link to="">Product</Link>
            </p>
          </Col>
          <Col span={24} md={8} lg={8}>
            <p className="footer-heading">Contact</p>
            <p>
              Head Office: <br /> 6199A Danville Road, Mississauga, ON, L5T 2H7
            </p>
            <br />
            <p>Phone: +1 123 456 7890</p>
            <br />
            <p>Email: mdbinshahed5@gmail.com</p>
          </Col>
          <Col span={24} md={8} lg={8}>
            <img src={logo} alt="" />
            <img style={{ width: "100%" }} src={payment} alt="" />
          </Col>
        </Row>
        <Divider style={{ borderColor: "#fff" }} />
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a
            style={{ color: "var(--primary)" }}
            target="_blank"
            href="https://github.com/binshahed"
          >
            Bin Shahed.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
