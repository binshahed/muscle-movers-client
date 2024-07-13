import { Card, Col, Row } from "antd";

import image1 from "../../assets/aboutUs/about-us-1.jpg";

const CompanyOverview = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Row gutter={20}>
        <Col span={24} md={12} lg={12}>
          <Card style={{ padding: "20px", height: "100%" }}>
            <h3 style={{ fontSize: "16px", color: "var(--primary)" }}>
              How It Started
            </h3>
            <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>
              Our Dream Accessible Fitness for All, Innovative Solutions,
              Sustainable Practices
            </h3>
            <p>
              At Muscle Movers, we're dedicated to helping you achieve your
              fitness goals with top-of-the-line equipment and accessories. Our
              journey began with a passion for fitness and a mission to make
              high-quality fitness products accessible to everyone. Whether
              you're a seasoned athlete or just starting your fitness journey,
              we're here to support you every step of the way.
              <br />
              <br />
              <ul>
                <li>
                  <strong>Accessible Fitness for All: </strong>
                  We strive to break down barriers to fitness by offering
                  high-quality, affordable equipment and resources. We believe
                  that everyone should have the tools they need to achieve their
                  health and fitness goals.
                </li>
                <br />
                <li>
                  <strong>Innovative Solutions: </strong> We are committed to
                  constantly evolving and innovating our product range to meet
                  the changing needs of our customers. Our goal is to provide
                  state-of-the-art fitness solutions that are both effective and
                  enjoyable to use.
                </li>
                <br />
                <li>
                  <strong>Sustainable Practices: </strong>
                  We aim to make a positive impact on the environment by
                  incorporating sustainable practices into our business
                  operations. From eco-friendly products to responsible
                  manufacturing processes, we are dedicated to promoting a
                  healthier planet alongside healthier lives.
                </li>
              </ul>
            </p>
          </Card>
        </Col>
        <Col span={24} md={12} lg={12}>
          <Card style={{ padding: "10px", height: "100%" }}>
            <img style={{ width: "100%" }} src={image1} alt="" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyOverview;
