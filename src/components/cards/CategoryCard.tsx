import { Link } from "react-router-dom";

type TCategoryCardProps = {
  item: {
    image: string;
    title: string;
  };
};

const CategoryCard = ({ item }: TCategoryCardProps) => {
  const { image, title } = item;

  return (
    <Link
      to={`${import.meta.env.VITE_BASE_URL}/bicycles?category=${title}`}
      className="group size-full space-y-10 border-y border-gray-200 py-9 md:space-y-0 md:border-x md:px-5 md:py-3"
    >
      <div className="flex h-40 items-center justify-center">
        <img src={image} alt={title} />
      </div>
      <h1 className="text-center text-2xl tracking-wide text-gray-800 capitalize group-hover:text-[#FA5252] md:text-lg">
        {title}
      </h1>
    </Link>
  );
};

export default CategoryCard;
