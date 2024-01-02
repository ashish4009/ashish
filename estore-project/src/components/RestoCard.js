import { IMG_URL } from "../contants";
import star from "../assets/star.jpg";

const RestoCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // const RestoCard = ({restaurant}) => { this is object destructuring .. directly use restaurant.info.name...
  // again we can destructure => const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data
  // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant
  return (
    <>
      {/* <div className=" w-[200px] p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_URL + cloudinaryImageId} />
        <div className="font-bold text-sm">
          <h3>{name}</h3>
          <span className="break-words">{cuisines.join(",")}</span>
          <p className="flex justify-left">
            <img className="h-8" src={star} alt="star" />
            {avgRating} stars
          </p>
        </div>
      </div> */}

      <div class="-mt-20 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="group relative h-60 w-36">
          <div class="w-48 mb-2 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
            <img
              src={IMG_URL + cloudinaryImageId}
              alt="Restraurant"
              class="h-max w-max object-cover object-center lg:h-48 lg:w-48"
            />
          </div>
          <div class="flex justify-between w-48">
            <div>
              <h3 class="break-keep text-sm text-gray-700">
                <a href="#">
                  <span
                    aria-hidden="true"
                    class="break-normal absolute inset-0"
                  ></span>
                  {name}
                </a>
              </h3>
              <div>
                <p class="break-all text-sm font-medium text-gray-900 ">
                  {cuisines.join(",")}
                </p>
              </div>
              <p className="flex justify-left">
                <img className="h-8" src={star} alt="star" />
                {avgRating} stars
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestoCard;
