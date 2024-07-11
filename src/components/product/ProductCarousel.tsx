import { Carousel } from "antd";
import slid1 from "../../assets/slide-1.jpg";
import slid2 from "../../assets/slide-2.jpg";
import slid3 from "../../assets/slide-3.jpg";

const contentStyle: React.CSSProperties = {
  height: "660px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};
const ProductCarousel = () => {
  return (
    <Carousel autoplay dots={false} autoplaySpeed={2000}>
      <div>
        <img style={contentStyle} src={slid1} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={slid2} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={slid3} alt="" />
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
