import { IMG_URL } from '../contants';
import  star  from '../assets/star.jpg'
const RestoCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // const RestoCard = ({restaurant}) => { this is object destructuring .. directly use restaurant.info.name...
  // again we can destructure => const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data
  // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant
  return (
    <div className='card'>
      <img src={IMG_URL + cloudinaryImageId} />
      <div className="contains">
        <h3>{name}</h3>
        <span>{cuisines.join(",")}</span><br/>
        <p><img className='starIcon' src = {star} alt='star'/>{avgRating} stars</p>
      </div>
    </div>
  );
};

export default RestoCard;