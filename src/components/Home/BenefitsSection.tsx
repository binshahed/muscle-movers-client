import { Col, Row } from "antd";

const data = [
  {
    title: "Superior Quality",
    description:
      "Our products are made from top-grade materials, ensuring durability and longevity.",
    image:
      "https://media.licdn.com/dms/image/C5612AQHJzMViliVnUg/article-cover_image-shrink_600_2000/0/1639459998571?e=2147483647&v=beta&t=pk8fEaW2wCkyw_vnw2_tUhTw-Xkaj8HoBWxjgjSRC4c"
  },
  {
    title: "Innovative Design",
    description:
      "We prioritize cutting-edge design, offering modern, user-friendly features.",
    image:
      "https://img.freepik.com/premium-photo/dark-gym-with-red-light-wall-bar-with-weights-floor_911201-3364.jpg"
  },
  {
    title: "Competitive Pricing",
    description:
      "Get the best value for your money with our competitively priced range.",
    image: "https://wallpapercave.com/wp/wp7578886.jpg"
  },
  {
    title: "Excellent Customer Service",
    description:
      "Our dedicated support team is always ready to assist you with any queries or concerns.",
    image: "https://img.freepik.com/premium-photo/dark-gym_882585-555.jpg"
  },
  {
    title: "Eco-Friendly Options",
    description:
      "We offer environmentally conscious products to help you make sustainable choices.",
    image:
      "https://t3.ftcdn.net/jpg/06/58/36/46/360_F_658364673_xWwfhJlZRLsSKynjU0x6sPTvAEmrSTvo.jpg"
  },

  {
    title: "Warranty and Guarantee",
    description:
      "Enjoy peace of mind with our comprehensive warranty and satisfaction guarantee.",
    image: "https://storage.prompt-hunt.workers.dev/clilr8loc000lmo0fz2apwf3u_1"
  }
];

const BenefitsSection = () => {
  return (
    <div className="container benefits-container">
      <h1 className="main-title">The Benefits You Gain from Our Products</h1>
      <Row gutter={[20, 20]}>
        {data.map((item) => (
          <Col span={24} md={8} lg={8} key={item.title}>
            <div
              className="benefits-content"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                padding: "20px",
                // textAlign: "center",
                borderRadius: "20px"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  borderRadius: "20px",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.781)"
                }}
              ></div>
              <h2 style={{ position: "relative" }}>{item.title}</h2>
              <p style={{ position: "relative" }}>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BenefitsSection;
