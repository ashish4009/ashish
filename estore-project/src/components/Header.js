import { useState } from "react";
import logo from "../assets/food-villa.jpg";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={logo} />
    {/* 'https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj' */}
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">InstaMart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};

export default HeaderComponent;
