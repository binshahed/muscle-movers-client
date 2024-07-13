import { Button, Card, Col, Divider, Flex, Row } from "antd";
import "../styles/style.cart.css";
import CartProductCard from "../components/cart/CartProductCard";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const orderSummeryStyle = {
  fontWeight: "bold",
  color: "#636363",
  fontSize: "18px"
};

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);

  const totalPrice: number = Number.parseFloat(cart.totalPrice.toFixed(2));

  return (
    <div className="cart-container container">
      <h3 className="cart-heading">Your Cart</h3>
      {cart.items.length === 0 ? (
        <div style={{ textAlign: "center" }}>No Cart Item Found</div>
      ) : (
        <Row gutter={20}>
          <Col span={24} md={12} lg={12}>
            {cart?.items?.map((product) => (
              <CartProductCard product={product} key={product?._id} />
            ))}
          </Col>
          <Col span={24} md={12} lg={12}>
            <Card style={{ width: "100%" }}>
              <h3 style={{ marginBottom: "30px" }} className="card-heading ">
                Order Summary
              </h3>
              <Flex justify="space-between">
                <p style={orderSummeryStyle}>Subtotal</p>
                <p style={{ ...orderSummeryStyle, color: "var(--secondary)" }}>
                  ${totalPrice}
                </p>
              </Flex>

              <Divider />
              <Flex justify="space-between">
                <p style={orderSummeryStyle}>Total</p>
                <p style={{ ...orderSummeryStyle, color: "var(--secondary)" }}>
                  ${totalPrice}
                </p>
              </Flex>
              <Link to="/check-out">
                <Button
                  disabled={cart.items.length === 0}
                  type="primary"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  Go To Checkout <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CartPage;
