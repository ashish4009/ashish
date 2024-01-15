import { useState, useEffect, useContext } from "react";
import RestoCard from "./RestoCard";
import { Shimmer, SearchShimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../shared/helper";
import useOnline from "../shared/useOnline";
import UserContext from "../shared/userContext";

const BodyComponent = () => {
  const { user, setUser } = useContext(UserContext);
  const [allRestaurents, setallRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [FilteredRestaurents, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setallRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h3>Offline, please check your internet connection!!</h3>;
  }

  if (!allRestaurents) return null;

  // if (FilteredRestaurents?.length == 0) return <h3>No match found</h3>;

  return allRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div class="p-4">
        <div class="flex max-w-xs mx-auto mt-4">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input
              type="text"
              class="w-96 py-2 pl-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Search"
              onChange={(e) => {
                setSearchInput(e?.target?.value);
              }}
            />
            <input
              type="text"
              class="w-96 py-2 pl-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Search"
              value={user.name}
              onChange={(e) =>
                setUser({
                  name: e.target.value,
                  email: "ashishnalawade84@gmail.com",
                })
              }
            />
          </div>
          <div class="">
            <button
              class="relative p-2 ml-2 bg-red-200 rounded-md"
              onClick={() => {
                const data = filterData(searchInput, allRestaurents);
                setFilteredRestaurants(data);
              }}
            >
              Search{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex space-x-8 flex-wrap">
        {FilteredRestaurents.map((tempObj) => {
          return (
            <Link
              to={"/restaurant/" + tempObj?.info?.id}
              key={tempObj?.info?.id}
            >
              <RestoCard restaurant {...tempObj?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
