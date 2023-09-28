import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DemoWithPageIndicators from "./pages/portfolio/DemoWithPageIndicators";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div className="header">
          <IconButton
            component={Link}
            to="https://github.com/onlytrleehieutrungg"
            sx={{ color: "white" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            to="https://www.facebook.com/rtlee2101.bido"
            sx={{ color: "white" }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            to="https://www.linkedin.com/in/rtlee2101/"
            sx={{ color: "white" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          {/* <NavLink
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
          </NavLink> */}
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
