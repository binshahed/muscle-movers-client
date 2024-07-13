import { Card, Rate } from "antd";
import Slider from "react-slick";

const data = [
  {
    name: "Testimonial by Chris Taylor",
    review:
      "Muscle Movers has completely transformed my home gym setup. Their equipment is top-notch, and their customer service is outstanding. I've seen significant improvements in my fitness journey thanks to their reliable and durable products."
  },
  {
    name: "Testimonial by Jordan Lee",
    review:
      "As someone who just started working out, I was overwhelmed by the number of options out there. Muscle Movers made it easy to find exactly what I needed. Their beginner-friendly guides and high-quality equipment have made all the difference for me."
  },
  {
    name: "Testimonial by Casey Johnson",
    review:
      "I've been a fitness enthusiast for years, and Muscle Movers' innovative products never cease to amaze me. Their commitment to sustainability and quality is evident in everything they offer. I highly recommend them to anyone looking to upgrade their workout routine."
  },
  {
    name: "Testimonial by Morgan Smith",
    review:
      "The customer service at Muscle Movers is phenomenal. They helped me choose the right equipment for my needs and answered all my questions with patience and expertise. I'm thrilled with my purchases!"
  },
  {
    name: "Testimonial by Taylor Adams",
    review:
      "Muscle Movers offers an excellent range of fitness equipment that suits all levels of fitness. I love their eco-friendly approach and the quality of their products. My workouts have never been better!"
  },
  {
    name: "Testimonial by Jamie Wilson",
    review:
      "I bought a treadmill from Muscle Movers, and it has been a game-changer for my cardio workouts. The build quality is superb, and it’s extremely user-friendly. Highly recommended!"
  },
  {
    name: "Testimonial by Avery Brown",
    review:
      "The variety of products at Muscle Movers is impressive. I found everything I needed to set up my home gym, and the equipment is of excellent quality. Their support team was very helpful throughout the purchase process."
  },
  {
    name: "Testimonial by Riley Green",
    review:
      "Muscle Movers has exceeded my expectations. The equipment is durable, and the instructional materials have helped me maximize my workouts. I’ve recommended them to all my friends!"
  },
  {
    name: "Testimonial by Jordan White",
    review:
      "Their customer-first approach really sets Muscle Movers apart. I had an issue with a delivery, and their team resolved it promptly. The equipment is fantastic, and I’m very satisfied with my purchases."
  },
  {
    name: "Testimonial by Alex Parker",
    review:
      "I've tried many fitness equipment brands, but Muscle Movers stands out in terms of quality and customer service. Their products are built to last, and they offer great value for money. I'm a loyal customer now!"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <h3
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px"
        }}
      >
        What Our Customers Say
      </h3>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <Card style={{ width: 300, margin: 20 }} key={item.name}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  {item.name}
                </p>
                <Rate disabled defaultValue={5} />
                <p style={{ fontStyle: "italic" }}>{item.review}</p>
              </Card>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
