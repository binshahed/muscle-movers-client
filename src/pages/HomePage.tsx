import "../styles/style.home.css";
import CategorySection from "../components/Home/CategorySection";
import BannerSection from "../components/Home/BannerSection";
import BestSellingSection from "../components/Home/BestSellingSection";
import { useGetProductsQuery } from "../store/features/products/productApi";
import BenefitsSection from "../components/Home/BenefitsSection";
import ImageGallery from "../components/Home/ImageGallery";

import LoadingSkeleton from "../components/Common/LoadingSkeleton";
import { APIError } from "../types/ApiError";

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error
  } = useGetProductsQuery(undefined);

  return (
    <div>
      <BannerSection />
      <CategorySection />
      {isLoading ? (
        <LoadingSkeleton />
      ) : isError ? (
        <p>{(error as APIError)?.data?.message}</p>
      ) : (
        <BestSellingSection products={products?.data} />
      )}
      <BenefitsSection />
      <ImageGallery />
    </div>
  );
};

export default HomePage;
