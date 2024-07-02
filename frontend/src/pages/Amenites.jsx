
import { amenitiesData } from "../utils/ameniities";
import AmenitiesCard from "../components/AmenitiesCard";
import FullScreenPage from "../components/FullScreenPage";
const Amenites = () => {
  return (
    <div className="">
      {/* //header */}
      <FullScreenPage Heading={"Amentites for your" } span={"Ultimate Comfort"} button={"Book Your Stay"} Description={"Explore a wide range of amenities designed to enhance your stay. From dining to wellness, we have everything you need for a memorable experience."} />
      <div className="px-4 py-4 space-y-6 lg:space-y-10 ">
        {amenitiesData.map((data, index) => {
          return (
            <AmenitiesCard data={data} index={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default Amenites;
