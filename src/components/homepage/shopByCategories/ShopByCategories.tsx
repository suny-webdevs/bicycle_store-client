import CategoryCard from "../../shared/CategoryCard";
import mountainBike from "../../../assets/homepage/mountain-bike.jpeg";
import roadBike from "../../../assets/homepage/road-bike.jpeg";
import hybridBike from "../../../assets/homepage/hybrid-bike.jpeg";
import electricBike from "../../../assets/homepage/electric-bike.jpeg";
import foldingBike from "../../../assets/homepage/folding-bike.jpeg";
import bmxBike from "../../../assets/homepage/bmx-bike.jpeg";
import cruiserBike from "../../../assets/homepage/cruiser-bike.jpeg";

const ShopByCategories = () => {
  const categories = [
    {
      image: mountainBike,
      title: "Mountain",
    },
    {
      image: roadBike,
      title: "Road",
    },
    {
      image: hybridBike,
      title: "Hybrid",
    },
    {
      image: electricBike,
      title: "Electric",
    },
    {
      image: foldingBike,
      title: "Folding",
    },
    {
      image: bmxBike,
      title: "BMX",
    },
    {
      image: cruiserBike,
      title: "Cruiser",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-black">Shop By Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-7">
        {categories.map((item, index) => {
          return <CategoryCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopByCategories;
