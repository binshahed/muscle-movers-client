import { Button, Card, Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../store/features/products/productApi";
import LoadingSkeleton from "../components/Common/LoadingSkeleton";
import { APIError } from "../types/ApiError";
import "../styles/style.productDetail.css";
import { discountCalculator } from "../utils/discountCalculator";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/features/cart/cartSlice";
import { convertProductToCartItem } from "../utils/cartCommonFunc";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { data, isLoading, isError, error } = useGetProductByIdQuery(
    id as string
  );
  const product = data?.data;

  const handleAddToCart = () => {
    const cartItem = convertProductToCartItem(product);
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="container" style={{ padding: "50px 0" }}>
      {isLoading ? (
        <LoadingSkeleton />
      ) : isError ? (
        <p style={{ textAlign: "center", color: "var(--primary)" }}>
          {(error as APIError)?.data?.message}
        </p>
      ) : (
        <Card style={{ width: "100%" }}>
          <Row gutter={20}>
            <Col span={24} md={12} lg={12}>
              <img
                style={{
                  width: "100%",
                  border: "1px solid #cfcfcf",
                  borderRadius: "15px"
                }}
                src={product?.photoUrl}
                alt=""
              />
            </Col>
            <Col span={24} md={12} lg={12}>
              <h3 className="product-name">{product?.name}</h3>
              <p>
                <strong>Category: </strong>
                {product?.category?.name}
              </p>
              <p>
                <span className="price-pd">
                  Price: $
                  {discountCalculator(
                    product.price,
                    product.discountPercentage
                  )}
                </span>

                <span className="main-price-detail">${product.price}</span>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  margin: "10px 0",
                  fontWeight: "bold"
                }}
              >
                Available in stock: {product.stockQuantity}
              </p>
              <h3 className="product-desc">{product?.description}</h3>
              {product?.stockQuantity > 0 ? (
                <Button type="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              ) : (
                <Button type="primary" disabled>
                  Out of stock
                </Button>
              )}
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};

export default ProductDetailsPage;
