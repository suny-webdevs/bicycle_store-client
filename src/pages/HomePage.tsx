import HeroSection from "../components/homepage/heroSection/HeroSection";
import heroBg from "../assets/homepage/hero-bg.png";

const HomePage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center bg-no-repeat px-3"
    >
      <div className="min-h-screen w-full pt-7">
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
