/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Pagination, PaginationProps, Row } from "antd";
import ProductCarousel from "../components/product/ProductCarousel";
import "../styles/style.products.css";

import { useEffect, useState } from "react";
import { useGetAllProductsMutation } from "../store/features/products/productApi";
import ProductCard from "../components/product/ProductCard";
import LoadingSkeleton from "../components/Common/LoadingSkeleton";
import { useLocation } from "react-router-dom";
import FilterProducts from "../components/product/FilterProducts";

const ProductsPage = () => {
  // selected category from homepage
  const { state } = useLocation();
  const defaultSelectedCategory = state?.categoryItem
    ? [state?.categoryItem?._id]
    : [];
  // selected category state
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultSelectedCategory
  );

  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // selected price state
  const [prices, setPrices] = useState<number[]>([0, 1000]);

  // get products
  const [
    getAllProducts,
    { data: products, isLoading: isLoadingProducts, isError }
  ] = useGetAllProductsMutation(undefined);

  // pagination
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setCurrentPage(pageNumber);
    const limit = 4; // Set your limit here
    const skip = (pageNumber - 1) * limit;
    setQuery(`limit=${limit}&skip=${skip}`);
  };

  // fetch products on component mount and when query changes
  useEffect(() => {
    getAllProducts({
      query: { query },
      data: {
        category: selectedCategories,
        price: prices
      }
    });
  }, [selectedCategories, prices, query]);

  return (
    <div>
      <ProductCarousel />
      <div className="container">
        <div className="product-section">
          <FilterProducts
            prices={prices}
            selectedCategories={selectedCategories}
            setPrices={setPrices}
            setSelectedCategories={setSelectedCategories}
            query={query}
            setQuery={setQuery}
          />
          {isLoadingProducts ? (
            <LoadingSkeleton />
          ) : isError ? (
            <p>Error fetching products.</p>
          ) : products?.data?.products.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "var(--primary)"
              }}
            >
              No Product Found
            </p>
          ) : (
            <Row gutter={[20, 20]}>
              {products?.data?.products.map((product: any) => (
                <Col span={6} key={product._id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
          <Pagination
            style={{ marginTop: "30px" }}
            align="end"
            current={currentPage}
            pageSize={4} // Set your page size here
            total={products?.data?.totalProducts}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
