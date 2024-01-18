import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../contants";
import { Shimmer } from "./Shimmer";
import { addItem, removeItem } from "../shared/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantComponent = () => {
  const [restaurant, setRestaurent] = useState({});
  const [restaurantManu, setRestaurentMenu] = useState({});
  const dispatch = useDispatch();
  // const count = 0;

  // const handleAddItem = () => {
  //   dispatch(addItem("grapes"));
  // };

  // const handelRemoveItem = (item) => {
  //   setCount(count - 1);
  //   dispatch(removeItem(item));
  // };

  const addItemToCart = (item) => {
    // setCount(count + 1);
    dispatch(addItem(item));
  };

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
        {/* <div>
          <button
            className="p-2 m-5 bg-green-100"
            onClick={() => handleAddItem()}
          > 
            Add Items
          </button>
        </div> */}
        {/* <div>
          <button
            className="p-2 m-5 bg-green-100"
            onClick={() => handelRemoveItem()}
          >
            remove Items
          </button>
        </div> */}
        <ul>
          {restaurantManu?.REGULAR?.cards[9]?.card?.card?.itemCards?.map(
            (item) => (
              <div key={item?.card?.info?.id} className="flex flex-wrap">
                <a>
                  <img
                    className="w-[200px] p-2 m-2 shadow-lg bg-pink-50"
                    src={IMG_URL + item?.card?.info?.imageId}
                  />
                </a>
                <h3>Name : {item?.card?.info?.name}</h3>
                <li>
                  Price : {item?.card?.info?.price}
                  <button
                    className="p-1 bg-green-100"
                    onClick={() => addItemToCart(item)}
                  >
                    Add+
                  </button>
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
