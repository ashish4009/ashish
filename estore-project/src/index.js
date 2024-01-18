import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutComponent from "./components/About";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/contact";
import RestaurantComponent from "./components/Restaurant";
import Profile from "./components/Profile";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./shared/userContext";
import store from "./shared/store";
import { Provider } from "react-redux";
import Cart from "./components/cart";

//lazy loading, Chunking, code splitting, on demand loading, dynamic import.
const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ashish Nalawade",
    email: "ashish143@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <HeaderComponent />
        {/* <BodyComponent /> */}
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantComponent />,
      },
      {
        //lazy loading
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
