import { Carousel, Col, Row } from "antd";
import groupedArray from "../../utils/arrayGrouping";
import TestimonialCard from "../cards/TestimonialCard";
import SectionTitle from "../shared/SectionTitle";

const testimonials = [
  {
    message:
      "This bike exceeded my expectations! Super lightweight, smooth gears, and great for city commutes. Worth every penny!",
    author: "Daniel Carter",
    profession: "Software Engineer",
  },
  {
    message:
      "Riding this bike feels amazing! The suspension absorbs bumps well, and the frame is sturdy yet stylish. Perfect for weekend adventures!",
    author: "Lisa Martinez",
    profession: "Graphic Designer",
  },
  {
    message:
      "As a cycling enthusiast, I can say this is one of the best value-for-money bikes out there. Perfect for both casual rides and serious training!",
    author: "Michael Anderson",
    profession: "Fitness Trainer",
  },
  {
    message:
      "This bike exceeded my expectations! Super lightweight, smooth gears, and great for city commutes. Worth every penny!",
    author: "Daniel Carter",
    profession: "Software Engineer",
  },
  {
    message:
      "Riding this bike feels amazing! The suspension absorbs bumps well, and the frame is sturdy yet stylish. Perfect for weekend adventures!",
    author: "Lisa Martinez",
    profession: "Graphic Designer",
  },
  {
    message:
      "As a cycling enthusiast, I can say this is one of the best value-for-money bikes out there. Perfect for both casual rides and serious training!",
    author: "Michael Anderson",
    profession: "Fitness Trainer",
  },
];

const Testimonials = () => {
  const slides = groupedArray(testimonials, 3);

  return (
    <div className="mt-10">
      <SectionTitle title="Customer reviews" />
      <div className="px-5 md:px-10">
        <Carousel dots={false} arrows>
          {slides.map((slideData: any[], index: number) => (
            <div key={index}>
              <Row gutter={[16, 16]} justify="center">
                {slideData.map((item, index: number) => (
                  <Col key={index} span={8}>
                    <TestimonialCard review={item} />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
