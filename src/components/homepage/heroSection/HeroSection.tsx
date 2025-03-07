import heroBg from "../../../assets/homepage/hero-bg.png";
import { Carousel } from "antd";
import carouselOne from "../../../assets/homepage/carousel-1.jpg";
import carouselTwo from "../../../assets/homepage/carousel-2.jpg";
import carouselThree from "../../../assets/homepage/carousel-3.jpg";
import SubBannerCard from "./SubBannerCard";
import subBannerOne from "../../../assets/homepage/sub-banner-1.webp";
import subBannerTwo from "../../../assets/homepage/sub-banner-2.jpeg";
import BannerCard from "./BannerCard";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center bg-no-repeat px-3 py-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-7">
        {/* Carousel */}
        <div className="md:col-span-3">
          <Carousel
            arrows={true}
            infinite={true}
            autoplay={{ dotDuration: true }}
            autoplaySpeed={5000}
          >
            <BannerCard
              intro="Welcome to Buycycle"
              title="exiting offer get 30% off"
              image={carouselOne}
            />
            <BannerCard
              intro="Welcome to Buycycle"
              title="exiting offer get 30% off"
              image={carouselTwo}
            />
            <BannerCard
              intro="Welcome to Buycycle"
              title="exiting offer get 30% off"
              image={carouselThree}
            />
          </Carousel>
        </div>
        {/* Sub banner */}
        <div className="grid grid-rows-2 gap-5 md:gap-8">
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
      {/* <div className="mt-10">
        <Brands />
      </div> */}
    </div>
  );
};

export default HeroSection;
