import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ashish Nalawade",
    email: "ashishnalawade84@gmail.com",
  },
  qualification: {
    degree: "BE Computer Science",
    pg: "CDAC",
  },
});

export default UserContext;
