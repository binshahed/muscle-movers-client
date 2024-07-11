import { Button, Col, Divider, Row } from "antd";
import { TProduct } from "../../types/types.products";

import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";

const BestSellingSection = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <h3 style={{ textTransform: "uppercase" }}>Best Selling Products</h3>
      <Divider />
      <Row gutter={[16, 16]}>
        {products?.slice(0, 4)?.map((product: TProduct) => (
          <Col span={24} md={6} lg={6} key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/products">
          <Button>See All Product</Button>
        </Link>
      </p>
    </div>
  );
};

export default BestSellingSection;
