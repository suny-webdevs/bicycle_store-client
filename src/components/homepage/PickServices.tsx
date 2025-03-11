import { FaTruckFast, FaGift } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";

const PickServices = () => {
  return (
    <div className="grid grid-cols-1 gap-10 bg-[#FA5252] px-3 py-5 md:grid-cols-4">
      <div className="flex items-center gap-3">
        <div>
          <FaTruckFast className="text-5xl text-gray-800" />
        </div>
        <div>
          <h1
            style={{ fontWeight: 500 }}
            className="tracking-wide text-gray-800"
          >
            Home Delivery
          </h1>
          <p className="text-sm tracking-wider text-gray-700">
            To all district
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <GiTakeMyMoney className="text-5xl text-gray-800" />
        </div>
        <div>
          <h1
            style={{ fontWeight: 500 }}
            className="tracking-wide text-gray-800"
          >
            Money Back Guaranty
          </h1>
          <p className="text-sm tracking-wider text-gray-700">
            Guaranty within 10 days
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <FaGift className="text-4xl text-gray-800" />
        </div>
        <div>
          <h1
            style={{ fontWeight: 500 }}
            className="tracking-wide text-gray-800"
          >
            Offers And Discounts
          </h1>
          <p className="text-sm tracking-wider text-gray-700">
            Back Returns In 7 Days
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <MdSupportAgent className="text-5xl text-gray-800" />
        </div>
        <div>
          <h1
            style={{ fontWeight: 500 }}
            className="tracking-wide text-gray-800"
          >
            24/7 Support Services
          </h1>
          <p className="text-sm tracking-wider text-gray-700">
            Any Time Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickServices;
