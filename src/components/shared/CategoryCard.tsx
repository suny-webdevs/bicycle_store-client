type TCategoryCardProps = {
  item: {
    image: string;
    title: string;
    // length: number;
  };
};

const CategoryCard = ({ item }: TCategoryCardProps) => {
  console.log("Category card", item);
  const { image, title } = item;

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <h1>{title}</h1>
    </div>
  );
};

export default CategoryCard;
