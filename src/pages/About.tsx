import { Button } from "antd";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SiTicktick } from "react-icons/si";
import SectionTitle from "../components/shared/SectionTitle";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegGrinStars, FaAngellist } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";

const About = () => {
  return (
    <div className="p-5 selection:bg-[#fa5252] selection:text-white">
      {/* About page Banner */}
      <div className="size-full">
        <div className="size-full">
          <img
            src="./team-behind-banner-1.png"
            alt="team behind banner"
            className="w-full object-cover"
          />
        </div>
        <div className="space-y-6 p-7 md:p-10">
          <div className="space-y-2">
            <h2 className="text-3xl" style={{ fontWeight: 500 }}>
              Meet the team behind your ride
            </h2>
            <p className="text-gray-600">
              At BuyCycle, we're passionate about delivering high-quality
              bicycles and exceptional service. Our mission is to inspire every
              rider with the perfect bike.
            </p>
          </div>
          <Button type="primary" size="large">
            Shop Bikes
          </Button>
        </div>
      </div>
      {/* Facilities */}
      <div className="mt-5 flex flex-col border border-gray-100 md:flex-row">
        {/* Facilities-1 */}
        <div className="flex items-start gap-5 border border-gray-100 px-4 py-5">
          <div>
            <RiDiscountPercentLine className="text-4xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-gray-800" style={{ fontWeight: 500 }}>
              Exclusive Customer Discounts
            </h3>
            <p className="text-md text-gray-600">
              Unlock special deals and savings just for you. Subscribe now to
              receive exclusive customer discounts.
            </p>
          </div>
        </div>
        {/* Facilities-2 */}
        <div className="flex items-start gap-5 border border-gray-100 px-4 py-5">
          <div>
            <LiaShippingFastSolid className="text-4xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-gray-800" style={{ fontWeight: 500 }}>
              Free Shipping Threshold
            </h3>
            <p className="text-gray-600">
              Enjoy free shipping on all orders over $50. Shop now and save on
              your favorite bikes and accessories.
            </p>
          </div>
        </div>
        {/* Facilities-3 */}
        <div className="flex items-start gap-5 border border-gray-100 px-4 py-5">
          <div>
            <SiTicktick className="text-3xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-gray-800" style={{ fontWeight: 500 }}>
              Extended Warranty Coverage
            </h3>
            <p className="text-gray-600">
              Extend the life of your bike with our comprehensive warranty
              coverage. Enjoy peace of mind and ride.
            </p>
          </div>
        </div>
      </div>
      {/* Core values */}
      <div className="mt-14 rounded-2xl bg-[#fff0f0] px-14 py-20">
        <SectionTitle title="Core values" />
        <div className="mt-10 grid grid-cols-1 border border-[#fdcece] md:grid-cols-2 lg:grid-cols-3">
          {/* Core values - 1 */}
          <div className="space-y-3 border border-[#fdcece] px-4 py-5">
            <div>
              <RiShieldStarLine className="text-4xl text-gray-800" />
            </div>
            <div className="space-y-1">
              <h2
                style={{ fontWeight: 600 }}
                className="text-2xl text-gray-800"
              >
                Quality
              </h2>
              <p className="text-gray-600">
                We are committed to offering top-notch bicycles and gear,
                ensuring every ride is smooth and reliable.
              </p>
            </div>
          </div>
          {/* Core values - 2 */}
          <div className="space-y-3 border border-[#fdcece] px-4 py-5">
            <div>
              <FaRegGrinStars className="text-4xl text-gray-800" />
            </div>
            <div className="space-y-1">
              <h2
                style={{ fontWeight: 600 }}
                className="text-2xl text-gray-800"
              >
                Customer Satisfaction
              </h2>
              <p className="text-gray-600">
                Your happiness is our priority. We strive to provide exceptional
                service and support to meet your cycling needs.
              </p>
            </div>
          </div>
          {/* Core values - 3 */}
          <div className="space-y-3 border border-[#fdcece] px-4 py-5">
            <div>
              <TbBulb className="text-5xl text-gray-800" />
            </div>
            <div className="space-y-1">
              <h2
                style={{ fontWeight: 600 }}
                className="text-2xl text-gray-800"
              >
                Innovation
              </h2>
              <p className="text-gray-600">
                We embrace the latest technologies and trends to bring you
                cutting-edge products that enhance your riding experience.
              </p>
            </div>
          </div>
          {/* Core values - 4 */}
          <div className="space-y-3 border border-[#fdcece] px-4 py-5">
            <div>
              <PiUsersThreeDuotone className="text-5xl text-gray-800" />
            </div>
            <div className="space-y-1">
              <h2
                style={{ fontWeight: 600 }}
                className="text-2xl text-gray-800"
              >
                Community
              </h2>
              <p className="text-gray-600">
                We foster a strong cycling community, organizing events and
                activities that bring enthusiasts together.
              </p>
            </div>
          </div>
          {/* Core values - 5 */}
          <div className="space-y-3 border border-[#fdcece] px-4 py-5">
            <div>
              <FaAngellist className="text-5xl text-gray-800" />
            </div>
            <div className="space-y-1">
              <h2
                style={{ fontWeight: 600 }}
                className="text-2xl text-gray-800"
              >
                Sustainability
              </h2>
              <p className="text-gray-600">
                We promote eco-friendly practices and products to contribute to
                a greener planet.
              </p>
            </div>
          </div>
          {/* Core values - 6 */}
          <div className="space-y-3 border border-[#fdcece] px-4 py-5">
            <div>
              <LuHeartHandshake className="text-5xl text-gray-800" />
            </div>
            <div className="space-y-1">
              <h2
                style={{ fontWeight: 600 }}
                className="text-2xl text-gray-800"
              >
                Integrity
              </h2>
              <p className="text-gray-600">
                We conduct our business with honesty and transparency, building
                trust with our customers and partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
