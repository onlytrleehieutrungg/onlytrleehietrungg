import React from "react";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import DemoWithPageIndicators from "./pages/portfolio/DemoWithPageIndicators";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className="header">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            test 1
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/demo2"
          >
            test 2
          </NavLink>
        </div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <DemoWithPageIndicators />,
      },
      {
        path: "/demo2",
        element: <DemoWithPageIndicators />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
