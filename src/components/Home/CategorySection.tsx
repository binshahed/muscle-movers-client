import { Card, Spin } from "antd";
import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const { data, isLoading, error } = useGetCategoriesQuery(undefined);
  if (isLoading) return <Spin />;
  if (error) return <p>Error: {error as string}</p>;
  console.log(data);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...settings}>
          {data.data.map(
            (item: { image: string; name: string; _id: string }) => (
              <Link
                to="/products"
                key={item._id}
                state={{ categoryItem: item }}
              >
                <Card
                  style={{ margin: 20 }}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      className="fixed-image"
                      src={item.image}
                    />
                  }
                >
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {item.name}
                  </p>
                </Card>
              </Link>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySection;
