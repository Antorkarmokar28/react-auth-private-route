import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "order",
        element: (
          <PrivateRoutes>
            <Order />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
