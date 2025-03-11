import HeroSection from "../components/homepage/heroSection/HeroSection";
import LatestProducts from "../components/homepage/latestProducts/LatestProducts";
import PickServices from "../components/homepage/PickServices";
import ShopByCategories from "../components/homepage/shopByCategories/ShopByCategories";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LatestProducts />
      <ShopByCategories />
      <PickServices />
    </div>
  );
};

export default HomePage;
