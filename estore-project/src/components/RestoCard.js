import {IMG_URL} from '../contants';
const RestoCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    // const RestoCard = ({restaurant}) => { this is object destructuring .. directly use restaurant.info.name...
    // again we can destructure => const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data
    // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant
    return (
      <div className='card'>
        <img src={IMG_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };

  export default RestoCard;