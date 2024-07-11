import "../styles/style.home.css";
import CategorySection from "../components/Home/CategorySection";
import BannerSection from "../components/Home/BannerSection";
import BestSellingSection from "../components/Home/BestSellingSection";
import { useGetAllProductsMutation } from "../store/features/products/productApi";
import BenefitsSection from "../components/Home/BenefitsSection";
import ImageGallery from "../components/Home/ImageGallery";
import { useEffect } from "react";
import LoadingSkeleton from "../components/Common/LoadingSkeleton";

const HomePage = () => {
  const [getAllProducts, { data: products, isLoading }] =
    useGetAllProductsMutation(undefined);

  useEffect(() => {
    getAllProducts({ query: {}, data: {} });
  }, []);

  console.log(products);

  return (
    <div>
      <BannerSection />
      <CategorySection />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <BestSellingSection products={products?.data?.products} />
      )}
      <BenefitsSection />
      <ImageGallery />
    </div>
  );
};

export default HomePage;
