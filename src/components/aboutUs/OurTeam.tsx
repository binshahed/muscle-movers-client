import { Avatar, Card, Col, Row } from "antd";
import person1 from "../../assets/aboutUs/person-1.jpg";
import person2 from "../../assets/aboutUs/person-2.jpg";
import person3 from "../../assets/aboutUs/person-3.jpg";
import person4 from "../../assets/aboutUs/person-4.jpg";

const { Meta } = Card;

const OurTeam = () => {
  return (
    <div>
      <h3
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px"
        }}
      >
        Meet Our Team
      </h3>
      <Row gutter={20}>
        <Col span={24} md={6} lg={6}>
          <Card
            hoverable={true}
            style={{ width: "100%" }}
            cover={
              <img style={{ width: "100%" }} alt="example" src={person1} />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Alex Johnson"
              description="Founder and CEO"
            />
          </Card>
        </Col>
        <Col span={24} md={6} lg={6}>
          <Card
            hoverable={true}
            style={{ width: "100%" }}
            cover={
              <img style={{ width: "100%" }} alt="example" src={person2} />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Taylor Smith"
              description="Chief Marketing Officer "
            />
          </Card>
        </Col>
        <Col span={24} md={6} lg={6}>
          <Card
            hoverable={true}
            style={{ width: "100%" }}
            cover={
              <img style={{ width: "100%" }} alt="example" src={person3} />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Casey Lee"
              description="Chief Technology Officer"
            />
          </Card>
        </Col>
        <Col span={24} md={6} lg={6}>
          <Card
            hoverable={true}
            style={{ width: "100%" }}
            cover={
              <img style={{ width: "100%" }} alt="example" src={person4} />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Morgan Green"
              description="Product Manager"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OurTeam;
