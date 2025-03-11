import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsPhoneFill } from "react-icons/bs";
import { BiSolidEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import BCSForm from "../dataEntry/BCSForm";
import BCSInput from "../dataEntry/BCSInput";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Footer = () => {
  const handleNewsletter: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 gap-5 bg-gray-800 px-5 py-10 md:grid-cols-7 md:py-14">
      {/* Store information */}
      <div className="md:col-span-2">
        <h3 className="mb-5 text-xl text-white md:mb-4">Store information</h3>
        {/* Address */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div>
              <FaLocationDot className="text-xl text-[#FA5252]" />
            </div>
            <p style={{ fontWeight: 300 }} className="text-sm text-gray-100">
              60 29th Street San Francisco, 507-Union Trade Center, United
              States America - 94110
            </p>
          </div>
          {/* Telephone */}
          <div className="group flex items-start gap-2">
            <div>
              <PiPhoneCallFill className="text-xl text-[#FA5252]" />
            </div>
            <Link
              style={{ fontWeight: 300 }}
              to="tel:+001234567890"
              className="text-sm text-gray-100 hover:underline"
            >
              (+00) 123-456-7890
            </Link>
          </div>
          {/* Phone */}
          <div className="group flex items-start gap-2">
            <div>
              <BsPhoneFill className="text-xl text-[#FA5252]" />
            </div>
            <Link
              style={{ fontWeight: 300 }}
              to="tel:+910123456789"
              className="text-sm text-gray-100 hover:underline"
            >
              (+91)-012-345-6789
            </Link>
          </div>
          {/* Email */}
          <div className="group flex items-start gap-2">
            <div>
              <BiSolidEnvelope className="text-xl text-[#FA5252]" />
            </div>
            <Link
              style={{ fontWeight: 300 }}
              to="mailto:contact@buycycle.com"
              className="text-sm text-gray-100 hover:underline"
            >
              contact@buycycle.com
            </Link>
          </div>
        </div>
      </div>
      {/* Quick links */}
      <div>
        <h3 className="mb-5 text-xl text-white md:mb-4">Quick links</h3>
        <div className="flex flex-col gap-2">
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Contact Us
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Shipping
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Sitemap
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            FAQs
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Blogs
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            About Us
          </Link>
        </div>
      </div>
      {/* Services */}
      <div>
        <h3 className="mb-5 text-xl text-white md:mb-4">Services</h3>
        <div className="flex flex-col gap-2">
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Order Status
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Terms Conditions
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Our policy
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Policy For Buyers
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Shipping
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Refund
          </Link>
        </div>
      </div>
      {/* Help */}
      <div>
        <h3 className="mb-5 text-xl text-white md:mb-4">Help</h3>
        <div className="flex flex-col gap-2">
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Term & Policy
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Press
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Careers
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Delivery
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Service
          </Link>
          <Link
            style={{ fontWeight: 300 }}
            className="text-sm text-gray-100 hover:underline"
            to=""
          >
            Sitemap
          </Link>
        </div>
      </div>
      {/* Newsletter */}
      <div className="md:col-span-2">
        <h3 className="mb-4 text-xl text-white md:mb-5">Newsletter</h3>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-100">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>
          <BCSForm className="space-y-3" onSubmit={handleNewsletter}>
            <BCSInput name="email" placeholder="Enter your email" />
            <Button htmlType="submit" type="primary">
              SUBSCRIBE
            </Button>
          </BCSForm>
        </div>
      </div>
    </div>
  );
};

export default Footer;
