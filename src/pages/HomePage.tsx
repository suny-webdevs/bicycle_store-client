import HeroSection from "../components/homepage/heroSection/HeroSection";
import LatestProducts from "../components/homepage/popularProducts/LatestProducts";
import ShopByCategories from "../components/homepage/shopByCategories/ShopByCategories";
// import TrendingProducts from "../components/homepage/trendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen w-full">
        <HeroSection />
      </div>
      <div className="min-h-screen px-3 py-5">
        <LatestProducts />
      </div>
      {/* <div className="border-x px-3 py-5">
        <TrendingProducts />
      </div> */}
      <div className="px-3 py-5">
        <ShopByCategories />
      </div>
    </div>
  );
};

export default HomePage;
