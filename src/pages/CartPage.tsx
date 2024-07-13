import { Col, Row } from "antd";
import "../styles/style.cart.css";
import CartProductCard from "../components/cart/CartProductCard";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="cart-container container">
      <h3 className="cart-heading">Your Cart</h3>
      <Row gutter={20}>
        <Col span={24} md={12} lg={12}>
          {cart?.items?.map((product) => (
            <CartProductCard product={product} key={product._id} />
          ))}
        </Col>
        <Col span={24} md={12} lg={12}>
          sum
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
