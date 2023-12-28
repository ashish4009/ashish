import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const AboutComponent = () => {
  return (
    <div>
      <h3>about us</h3>
      <Profile name={"ashish"} />
    </div>
  );
};

export default AboutComponent;
