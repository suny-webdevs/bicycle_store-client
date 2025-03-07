import { Button } from "antd";

type TSubBannerCardProps = {
  intro: string;
  title: string;
  image: string;
  alt?: boolean;
};

const SubBannerCard = ({ intro, title, image, alt }: TSubBannerCardProps) => {
  return (
    <div
      className={`group grid grid-cols-3 items-center gap-5 rounded-md bg-white px-5 py-7 md:py-2 ${alt ? "col-re" : ""}`}
    >
      <div className="col-span-2">
        <h6 className="tracking-wide text-gray-500 uppercase">{intro}</h6>
        <h2
          style={{ fontWeight: 500 }}
          className="text-3xl text-gray-800 capitalize"
        >
          {title}
        </h2>
        <div className="mt-3">
          <Button type="primary">Shop Now</Button>
        </div>
      </div>
      <div>
        <img
          className="size-20 scale-125 transform object-cover transition duration-300 group-hover:scale-150 group-hover:transform"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default SubBannerCard;
