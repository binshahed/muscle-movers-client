import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <div className="container banner-content">
        <Row>
          <Col span={24} md={12} lg={12}>
            <h1>Sculpt Your Space with Luxurious Fitness Innovation</h1>
            <p>
              Explore our premium CLUB SERIES+ cardio equipment designed to
              elevate your fitness routine.
            </p>
            <Link to="/products">
              <Button>Shop Now</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BannerSection;
