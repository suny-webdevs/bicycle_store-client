import HeroSection from "../components/homepage/heroSection/HeroSection";
import LatestProducts from "../components/homepage/latestProducts/LatestProducts";
import PickServices from "../components/homepage/PickServices";
import ShopByCategories from "../components/homepage/shopByCategories/ShopByCategories";
import Testimonials from "../components/homepage/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LatestProducts />
      <Testimonials />
      <ShopByCategories />
      <PickServices />
    </>
  );
};

export default HomePage;
