import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../contants";
import { Shimmer } from "./Shimmer";

const RestaurantComponent = () => {
  const [restaurant, setRestaurent] = useState({});
  const [restaurantManu, setRestaurentMenu] = useState({});

  let param = useParams();

  useEffect(() => {
    getRestaurentInfo();
  }, []);
  async function getRestaurentInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        param?.id
    );
    const jsondata = await data.json();
    setRestaurent(jsondata?.data?.cards[0]?.card?.card.info);
    setRestaurentMenu(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap);
  }

  if (restaurant) {
    return !restaurantManu?.REGULAR ? (
      <Shimmer />
    ) : (
      <div className="flex  flex-wrap justify-center">
        <div className="">
          <h2 className="">{restaurant?.name}</h2>
          <img
            className="w-[200px] p-2 m-2 shadow-lg bg-pink-50"
            src={IMG_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="text-sm">
          <h3>Area : {restaurant?.areaName}</h3>
          <h3>City : {restaurant?.city}</h3>
          <h3>Rating : {restaurant?.avgRating}</h3>
          <h3>cost For Two : {restaurant?.costForTwoMessage}</h3>
        </div>
        <ul>
          {restaurantManu?.REGULAR?.cards[9]?.card?.card?.itemCards?.map(
            (item) => (
              <div className="flex flex-wrap">
                <a>
                  <img
                    className="w-[200px] p-2 m-2 shadow-lg bg-pink-50"
                    src={IMG_URL + item?.card?.info?.imageId}
                  />
                </a>
                <h3 key={item?.card?.info?.id}>
                  Name : {item?.card?.info?.name}
                </h3>
                <li key={item?.card?.info?.id}>
                  Price : {item?.card?.info?.price}
                </li>
              </div>
            )
          )}
        </ul>
      </div>
    );
  }
};

export default RestaurantComponent;
