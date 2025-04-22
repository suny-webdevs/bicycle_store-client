import { Button } from "antd";

type TSubBannerCardProps = {
  intro: string;
  title: string;
  image: string;
};

const SubBannerCard = ({ intro, title, image }: TSubBannerCardProps) => {
  return (
    <div
      className={`group flex flex-col-reverse gap-5 rounded-md bg-white p-5 md:p-10`}
    >
      <div className="">
        <h6 className="tracking-wide text-gray-500 uppercase">{intro}</h6>
        <h2
          style={{ fontWeight: 500 }}
          className="text-3xl text-gray-800 capitalize"
        >
          {title}
        </h2>
        <div className="mt-3">
          <Button type="primary" size="large">
            Shop Now
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="size-32 transform object-contain transition duration-300 group-hover:scale-130 group-hover:transform"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default SubBannerCard;
