import mountainBike from "../../../assets/homepage/mountain-bike.jpeg";
import roadBike from "../../../assets/homepage/road-bike.jpeg";
import hybridBike from "../../../assets/homepage/hybrid-bike.jpeg";
import electricBike from "../../../assets/homepage/electric-bike.jpeg";
import foldingBike from "../../../assets/homepage/folding-bike.jpeg";
import bmxBike from "../../../assets/homepage/bmx-bike.jpeg";
import cruiserBike from "../../../assets/homepage/cruiser-bike.jpeg";
import CategoryCard from "../../cards/CategoryCard";
import SectionTitle from "../../shared/SectionTitle";

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
      <SectionTitle title="shop by category" />
      <div className="grid grid-cols-1 border border-gray-200 md:grid-cols-7">
        {categories.map((item, index) => {
          return <CategoryCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopByCategories;
