import { restoList } from "../contants";

export function filterData(searchInput, restaurants) {
  const data = restaurants.filter((resto) =>
    resto?.info?.name?.toLowerCase()?.includes?.(searchInput.toLowerCase())
  );
  console.log(data);
  if (data?.length) {
    return data;
  } else {
    return restoList;
    // data2 = "no match found";
    // return <h3>no match found</h3>;
  }
}
