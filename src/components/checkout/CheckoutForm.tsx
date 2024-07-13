/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, message, Radio } from "antd";

import { useCurrentUser } from "../../store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartState } from "../../types/types.cart";
import { useCreateOrderMutation } from "../../store/features/order/orderApi";
import { clearCart } from "../../store/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!"
  }
};

const CheckoutForm = ({ cart }: { cart: CartState }) => {
  const user = useAppSelector(useCurrentUser);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const order = {
      user: user?._id,
      products: cart.items.map((pd) => {
        return {
          product: pd._id,
          quantity: pd.quantity
        };
      }),
      deliveryAddress: values?.deliveryAddress,
      paymentMethod: values?.paymentMethod
    };
    try {
      await createOrder(order).unwrap();
      dispatch(clearCart());
      message.success("Order placed successfully");
      navigate("/products");
    } catch (error) {
      message.error("Failed to place order");
    }
  };

  return (
    <Form
      {...layout}
      name="checkout-form"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true }]}
        initialValue={user?.name}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true }]}
        initialValue={user?.email}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[{ required: true }]}
        initialValue={user?.phone}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="deliveryAddress"
        label="deliveryAddress"
        rules={[{ required: true }]}
        initialValue={user?.address}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="paymentMethod"
        label="Payment Method"
        rules={[{ required: true }]}
        initialValue="cash-on"
      >
        <Radio.Group>
          <Radio value="cash-on">Cash On Delivery</Radio>
          <Radio value="card" disabled>
            Card
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CheckoutForm;
