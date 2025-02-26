import About from "../pages/About";
import Bicycles from "../pages/Bicycles";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import { Routing } from "../utils/menuListGenerator";

const publicRouteElement = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "Bicycles",
    path: "bicycles",
    element: <Bicycles />,
  },
  {
    name: "About Us",
    path: "about",
    element: <About />,
  },
  {
    name: "Contact Us",
    path: "contact",
    element: <Contact />,
  },
];

export const publicPaths = new Routing(publicRouteElement).path();
export const publicMenus = new Routing(publicRouteElement).menu("");
