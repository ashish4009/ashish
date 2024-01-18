import { useContext } from "react";
import { IMG_URL } from "../contants";
import UserContext from "../shared/userContext";

const CartItem = ({ name, imageId, price }) => {
  return (
    <div class="-mt-20 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="group relative h-60 w-36">
        <div class="w-48 mb-2 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
          <img
            src={IMG_URL + imageId}
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
            {/* <div>
                <p class="break-all text-sm font-medium text-gray-900 ">
                  {cuisines.join(",")}
                </p>
              </div> */}
            <p className="flex justify-left">
              {/* <img className="h-8" src={star} alt="star" /> */}
              {price / 100} price
            </p>
          </div>
        </div>

        <h3 className="font-bold text-xl">{name}</h3>
        {/* <h2>{description}</h2> */}
        <h4>Rupees:{price / 100}</h4>
      </div>
    </div>
  );
};

export default CartItem;
