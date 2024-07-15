/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, Flex, Row } from "antd";
import { useAppSelector } from "../store/hooks";

import CheckoutForm from "../components/checkout/CheckoutForm";
import { useEffect } from "react";

const orderSummeryStyle = {
  fontWeight: "bold",
  color: "#636363",
  fontSize: "18px"
};
const CheckoutPage = () => {
  const cart = useAppSelector((state) => state.cart);

  const totalPrice: number = Number.parseFloat(cart.totalPrice.toFixed(2));

  useEffect(() => {
    const unloadCallback = (event: BeforeUnloadEvent) => {
      event.preventDefault();

      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <Row gutter={20}>
        <Col span={24} md={12} sm={12}>
          <Card style={{ width: "100%" }}>
            <h3 style={{ marginBottom: "30px" }} className="card-heading ">
              Order Summary
            </h3>
            <Flex justify="space-between">
              <p style={orderSummeryStyle}> Total Amount</p>
              <p style={{ ...orderSummeryStyle, color: "var(--secondary)" }}>
                ${totalPrice}
              </p>
            </Flex>
          </Card>
        </Col>
        <Col span={24} md={12} sm={12}>
          <Card>
            <CheckoutForm cart={cart} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
