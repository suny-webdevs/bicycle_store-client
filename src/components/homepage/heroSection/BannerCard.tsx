import { Button } from "antd";
import { TCarouselCardProps } from "../../../interface/homepage/homepage.type";

const BannerCard = ({
  intro,
  title,
  description,
  image,
}: TCarouselCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-[80vh] rounded-md bg-cover bg-center bg-no-repeat"
    >
      {/* Carousel overlay */}
      <div className="flex h-full flex-col justify-center bg-black/60 p-10">
        <div className="grid-col-1 grid md:grid-cols-2">
          {/* Carousel content */}
          <div className="h-full w-full space-y-2 text-white">
            <h6 className="font-bold uppercase md:text-lg">{intro}</h6>
            <h1 className="text-5xl leading-16 font-bold capitalize">
              {title}
            </h1>
            {description ? <p className="">{description}</p> : ""}
            <div className="mt-5">
              <Button variant="solid" color="danger">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Blank column */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
