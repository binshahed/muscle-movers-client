import "../styles/style.home.css";
import CategorySection from "../components/Home/CategorySection";
import BannerSection from "../components/Home/BannerSection";
import BestSellingSection from "../components/Home/BestSellingSection";
import { useGetGetProductsQuery } from "../store/features/products/productApi";
import { Spin } from "antd";

const HomePage = () => {
  const { data: products, isLoading } = useGetGetProductsQuery(null);
  console.log(products);

  return (
    <div>
      <BannerSection />
      <CategorySection />
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <BestSellingSection products={products?.data} />
      )}
    </div>
  );
};

export default HomePage;
