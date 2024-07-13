import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { TProduct } from "../../types/types.products";

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
const CartProductCard = (product: { product: TProduct }) => {
  console.log();
  return (
    <Card style={{ borderRadius: "20px", marginBottom: "20px" }}>
      <Card.Grid style={leftSide} hoverable={false}>
        <img
          style={{ width: "50%", padding: "20px" }}
          src={product.product.photoUrl}
          alt=""
        />
      </Card.Grid>
      <Card.Grid style={rightSide} hoverable={false}>
        <h3 className="card-heading ">Product Name</h3>
        <p className="card-price">1000 X 3</p>
        <p className="card-grandTotal">3000</p>
        <Button.Group>
          <Button>
            <MinusOutlined />
          </Button>
          <Button disabled>0</Button>
          <Button>
            <PlusOutlined />
          </Button>
          <Button type="primary">
            <DeleteOutlined />
          </Button>
        </Button.Group>
      </Card.Grid>
    </Card>
  );
};

export default CartProductCard;
