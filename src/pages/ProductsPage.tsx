/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
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

  // selected price state
  const [prices, setPrices] = useState<number[]>([0, 1000]);

  // search query
  const [searchTerm, setSearchTerm] = useState<string>("");

  // get products
  const [
    getAllProducts,
    { data: products, isLoading: isLoadingProducts, isError }
  ] = useGetAllProductsMutation(undefined);

  // fetch products on component mount and when query changes
  useEffect(() => {
    getAllProducts({
      query: { query },
      data: {
        category: selectedCategories,
        price: prices,
        search: searchTerm
      }
    });
  }, [selectedCategories, prices, query, searchTerm]);

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
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
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
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
