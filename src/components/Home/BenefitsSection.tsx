import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  return (
    <div className="benefits-container">
      <div className="container ">
        <Row>
          <Col md={12} />
          <Col span={24} md={12} lg={12} className="benefits-content">
            <p className="top-title">Free</p>
            <h1 className="main-title">CUSTOM HOME GYM DESIGN</h1>
            <p className="benefits-detail">
              Whether you're looking for a cost-effective setup starting at
              $10,000 or a luxurious gym up to $150,000, we can help you create
              the ideal fitness space in your home.
            </p>
            <Link to="/products">
              <Button type="primary" size="large">
                Shop Now
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BenefitsSection;
