import { Badge, Button, Card } from "antd";
import { discountCalculator } from "../../utils/discountCalculator";
import { TProduct } from "../../types/types.products";
import "../../styles/style.productCard.css";
import { addToCart } from "../../store/features/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { convertProductToCartItem } from "../../utils/cartCommonFunc";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddCart = () => {
    const cartItem = convertProductToCartItem(product);
    dispatch(addToCart(cartItem));
  };
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<img alt="example" src={product.photoUrl} />}
    >
      <div>
        <p className="product-name">{product.name}</p>
        {/* <p>{product.description}</p> */}
        <p className="price">
          <span className="main-price">
            ${discountCalculator(product.price, product.discountPercentage)}
          </span>
          {product.discountPercentage > 0 && (
            <span>
              <br />
              <span className="discount-price">${product.price} </span>
              <span className="discount-percentage">
                <Badge
                  className="site-badge-count-109"
                  count={`Save ${product.discountPercentage}%`}
                  style={{ backgroundColor: "#52c41a", fontSize: "16px" }}
                />
              </span>
            </span>
          )}
        </p>
        <Button size="large" onClick={handleAddCart}>
          Add To Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
