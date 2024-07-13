import { Badge, Button, Card } from "antd";
import { discountCalculator } from "../../utils/discountCalculator";
import { TProduct } from "../../types/types.products";
import "../../styles/style.productCard.css";
import { addToCart } from "../../store/features/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { convertProductToCartItem } from "../../utils/cartCommonFunc";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddCart = () => {
    const cartItem = convertProductToCartItem(product);
    dispatch(addToCart(cartItem));
  };
  return (
    <Card
      hoverable
      style={{ width: "100%", height: "100%" }}
      cover={<img alt="example" src={product.photoUrl} />}
    >
      <div>
        <Link
          to={`/products/${product._id}`}
          style={{ color: "var(-secondary)" }}
        >
          <p className="product-name">{product.name}</p>
        </Link>
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
        {product.stockQuantity === 0 ? (
          <Button size="large" disabled>
            Out of stock
          </Button>
        ) : (
          <Button size="large" onClick={handleAddCart}>
            Add To Cart
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
