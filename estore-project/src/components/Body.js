import { useState , useEffect} from "react";
import { restoList } from "../contants";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";


function filterData(searchInput, restaurants) {
  // let count=10
  // if (searchInput == "") {
  //   return restoList;
  // } else {
    const data = restaurants.filter((resto) =>
      resto?.info?.name?.toLowerCase()?.includes?.(searchInput.toLowerCase())
    );
    if (data.length) {
      return data;
    } else {
      return restoList;
    }
  // }
}
//props = properties
const BodyComponent = () => {
  const [allRestaurents,setallRestaurents] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [FilteredRestaurents, setFilteredRestaurants ] = useState([]);

  useEffect(()=>{
    getRestaurents();
  },[])

  async function getRestaurents(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setallRestaurents(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
  }

  if(FilteredRestaurents?.length==0) return <h3>No match found</h3>
  
  return (allRestaurents.length == 0 ) ? <Shimmer/> : (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurents);
            setFilteredRestaurants(data);
          }}
        >
          Search{" "}
        </button>
      </div>
      <div className="resto-list">
        {FilteredRestaurents.map((tempObj) => {
          return (
            <RestoCard restaurant {...tempObj.info} key={tempObj.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
