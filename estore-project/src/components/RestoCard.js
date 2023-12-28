import { IMG_URL } from "../contants";
import star from "../assets/star.jpg";

const RestoCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // const RestoCard = ({restaurant}) => { this is object destructuring .. directly use restaurant.info.name...
  // again we can destructure => const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data
  // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant
  return (
    <div className=" w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_URL + cloudinaryImageId} />
      <div className="font-bold text-sm">
        <h3>{name}</h3>
        <span className="break-words">{cuisines.join(",")}</span>
        <p className="flex justify-left">
          <img className="h-8" src={star} alt="star" />
          {avgRating} stars
        </p>
      </div>
    </div>
  );
};

export default RestoCard;
