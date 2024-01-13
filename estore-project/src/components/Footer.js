import { useContext } from "react";
import UserContext from "../shared/userContext";

const FooterComponent = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="p-10 m-20">
      This site is developed by {user.name} Email : {user.email}
    </h4>
  );
};

export default FooterComponent;
