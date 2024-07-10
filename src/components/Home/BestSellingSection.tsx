import { Col, Row } from "antd";
import { TProduct } from "../../types/types.products";

import ProductCard from "../product/ProductCard";

const BestSellingSection = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <h3 style={{ marginBottom: "40px" }}>Best Selling Products</h3>
      <Row gutter={[16, 16]}>
        {products.map((product: TProduct) => (
          <Col span={6} key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BestSellingSection;
