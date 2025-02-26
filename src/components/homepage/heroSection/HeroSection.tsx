import { Carousel } from "antd";
import CarouselCard from "./CarouselCard";
import carouselOne from "../../../assets/homepage/carousel-1.jpg";
import carouselTwo from "../../../assets/homepage/carousel-2.jpg";
import carouselThree from "../../../assets/homepage/carousel-3.jpg";
import SubBannerCard from "./SubBannerCard";
import subBannerOne from "../../../assets/homepage/sub-banner-1.webp";
import subBannerTwo from "../../../assets/homepage/sub-banner-2.jpeg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
      {/* Carousel */}
      <div className="md:col-span-3">
        <Carousel
          arrows
          infinite
          autoplay={{ dotDuration: true }}
          autoplaySpeed={5000}
        >
          <CarouselCard
            intro="Welcome to Buycycle"
            title="exiting offer get 30% off"
            image={carouselOne}
          />
          <CarouselCard
            intro="Welcome to Buycycle"
            title="exiting offer get 30% off"
            image={carouselTwo}
          />
          <CarouselCard
            intro="Welcome to Buycycle"
            title="exiting offer get 30% off"
            image={carouselThree}
          />
        </Carousel>
      </div>
      {/* Sub banner */}
      <div className="grid grid-rows-2 gap-5">
        {/* Sub banner 1 */}
        <SubBannerCard
          intro="Braking Systems"
          title="Dual brake"
          image={subBannerOne}
        />
        {/* Sub banner 2 */}
        <SubBannerCard
          intro="Tires"
          title="Smooth cycling"
          image={subBannerTwo}
          alt
        />
      </div>
    </div>
  );
};

export default HeroSection;
