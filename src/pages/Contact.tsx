import {
  FaLocationDot,
  FaEnvelopeOpenText,
  FaPhoneVolume,
} from "react-icons/fa6";
import BCSInput from "../components/dataEntry/BCSInput";
import BCSForm from "../components/dataEntry/BCSForm";
import BCSTextArea from "../components/dataEntry/BCSTextArea";
import { Button } from "antd";

const Contact = () => {
  const onSubmit = () => {};
  return (
    <div className="container mx-auto my-14 space-y-14 px-2 md:px-0 lg:px-0">
      {/* Contact Card */}
      <div className="grid grid-cols-1 border border-gray-100 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group flex flex-col items-center justify-center space-y-5 border border-gray-100 px-14 py-10 transition duration-150 hover:bg-[#fff0f0]">
          <div className="rounded-full bg-gray-100 p-5 group-hover:bg-[#fa5252]">
            <FaLocationDot className="text-3xl text-gray-800 group-hover:text-[#ffffff]" />
          </div>
          <div className="space-y-3 text-center">
            <h1 style={{ fontWeight: 700 }} className="text-3xl text-gray-800">
              Our Location
            </h1>
            <p>House #5, Street Number #98, brasilia- 70000-000, Brazil</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group flex flex-col items-center justify-center space-y-5 border border-gray-100 px-14 py-10 transition duration-150 hover:bg-[#fff0f0]">
          <div className="rounded-full bg-gray-100 p-5 group-hover:bg-[#fa5252]">
            <FaEnvelopeOpenText className="text-3xl text-gray-800 group-hover:text-[#ffffff]" />
          </div>
          <div className="space-y-3 text-center">
            <h1 style={{ fontWeight: 700 }} className="text-3xl text-gray-800">
              Contact Number
            </h1>
            <p>Phone: (+55) 654-456-5417</p>
            <p>Mobile: (+01) 654-456-1234</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group flex flex-col items-center justify-center space-y-5 border border-gray-100 px-14 py-10 transition duration-150 hover:bg-[#fff0f0]">
          <div className="rounded-full bg-gray-100 p-5 group-hover:bg-[#fa5252]">
            <FaPhoneVolume className="text-3xl text-gray-800 group-hover:text-[#ffffff]" />
          </div>
          <div className="space-y-3 text-center">
            <h1 style={{ fontWeight: 700 }} className="text-3xl text-gray-800">
              Email Address
            </h1>
            <p>Contact@buycicle.com</p>
            <p>Support@buycicle.com</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="hidden size-full lg:block">
          <img
            src="./contact-banner.png"
            alt="contact banner"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-end space-y-10">
          <div className="space-y-3">
            <h1
              className="text-3xl text-gray-800 md:text-5xl lg:text-7xl"
              style={{ fontWeight: 600 }}
            >
              Let&apos;s Connect
            </h1>
            <p className="text-gray-600">
              Feel free to adjust the description to include specific contact
              details such as email address, phone number, and physical address
              as needed.
            </p>
          </div>
          <BCSForm onSubmit={onSubmit} className="space-y-4">
            <BCSInput
              name="name"
              placeholder="Input your name"
              size="large"
              style={{ fontSize: "1.25rem", padding: "1rem", borderRadius: 0 }}
            />
            <BCSInput
              type="email"
              name="email"
              placeholder="Input your email address"
              size="large"
              style={{ fontSize: "1.25rem", padding: "1rem", borderRadius: 0 }}
            />
            <BCSInput
              name="phone"
              placeholder="Input your phone number"
              size="large"
              style={{ fontSize: "1.25rem", padding: "1rem", borderRadius: 0 }}
            />
            <BCSTextArea
              name="message"
              placeholder="Input message here"
              rows={5}
            />
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ borderRadius: 0, padding: "1rem", fontSize: "1.25rem" }}
            >
              Send message
            </Button>
          </BCSForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
