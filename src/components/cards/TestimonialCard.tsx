import { PiUserCircleDuotone } from "react-icons/pi";

type TTestimonialProps = {
  review: {
    message: string;
    author: string;
    profession: string;
  };
};

const TestimonialCard = ({ review }: TTestimonialProps) => {
  const { message, author, profession } = review;

  return (
    <div className="group space-y-5">
      <p
        style={{ fontWeight: 300 }}
        className="text-lg tracking-wide text-gray-500"
      >
        &ldquo;{message}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <div>
          <PiUserCircleDuotone className="text-4xl" />
        </div>
        <div>
          <h1
            style={{ fontWeight: 500 }}
            className="text-lg text-gray-800 group-hover:text-[#fa5252]"
          >
            {author}
          </h1>
          <p className="text-gray-700">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
