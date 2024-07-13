import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Popconfirm, message } from "antd";
import { discountCalculator } from "../../utils/discountCalculator";
import { TCartItem } from "../../types/types.cart";
import { useAppDispatch } from "../../store/hooks";
import {
  addToCart,
  deleteItemFromCart,
  removeFromCart
} from "../../store/features/cart/cartSlice";

const leftSide: React.CSSProperties = {
  width: "50%",
  padding: "0"
  // borderRadius: "20px 0 0 20px"
};
const rightSide: React.CSSProperties = {
  width: "50%",
  padding: "20px"
  // borderRadius: "0 20px 20px 0"
};

const CartProductCard = ({ product }: { product: TCartItem }) => {
  const dispatch = useAppDispatch();

  const handleDecrementQuantity = () => {
    dispatch(removeFromCart(product));
  };

  const handleIncrementQuantity = () => {
    dispatch(addToCart(product));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteItemFromCart(product?._id as string));
    message.success("Product deleted successfully.");
  };

  const handleCancel = () => {
    message.error("Deletion canceled.");
  };

  return (
    <Card style={{ borderRadius: "20px", marginBottom: "20px" }}>
      <Card.Grid style={leftSide} hoverable={false}>
        <img
          style={{ width: "50%", padding: "20px" }}
          src={product?.photoUrl}
          alt=""
        />
      </Card.Grid>
      <Card.Grid style={rightSide} hoverable={false}>
        <h3 className="card-heading ">{product.name}</h3>
        <p className="card-price">
          ${discountCalculator(product.price, product.discountPercentage)} X{" "}
          {product.quantity}
        </p>
        <p className="card-grandTotal">${product.productPrice}</p>
        <Button.Group>
          {product.quantity === 1 ? (
            <Button disabled>
              <MinusOutlined />
            </Button>
          ) : (
            <Button onClick={handleDecrementQuantity}>
              <MinusOutlined />
            </Button>
          )}
          <Button disabled>{product.quantity}</Button>
          <Button onClick={handleIncrementQuantity}>
            <PlusOutlined />
          </Button>
          <Popconfirm
            title="Delete the product"
            description="Are you sure you want to delete this product from the cart?"
            onConfirm={handleDeleteProduct}
            onCancel={handleCancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Button.Group>
      </Card.Grid>
    </Card>
  );
};

export default CartProductCard;
