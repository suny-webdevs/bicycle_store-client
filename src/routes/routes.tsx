import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/UserNAuth/Login";
import Register from "../pages/UserNAuth/Register";
import { publicPaths } from "./public.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: publicPaths,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
