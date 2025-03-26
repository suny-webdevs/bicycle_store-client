import { Carousel, Col, Row } from "antd";
import TestimonialCard from "../../cards/TestimonialCard";
import SectionTitle from "../../shared/SectionTitle";
import groupedArray from "../../../utils/groupedArray";
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
    <div className="my-20">
      <SectionTitle title="Customer reviews" />
      <div className="px-5 md:px-10">
        <Carousel arrows>
          {slides.map((group: any[], groupIndex: number) => (
            <div key={groupIndex} className="flex justify-center space-x-4 p-4">
              <Row gutter={[16, 16]}>
                {group.map((review, reviewIndex) => (
                  <Col key={reviewIndex} span={24 / 3}>
                    <TestimonialCard review={review} />
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
