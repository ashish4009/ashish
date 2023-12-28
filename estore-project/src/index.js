import React, { Suspense, lazy } from "react";
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

//lazy loading, Chunking, code splitting, on demand loading, dynamic import.
const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      {/* <BodyComponent /> */}
      <Outlet />
      <FooterComponent />
    </React.Fragment>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
