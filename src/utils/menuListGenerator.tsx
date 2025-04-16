import { NavLink } from "react-router-dom";
import { TMenu, TPath, TRouteElements } from "../interface/router/routes.type";

export class Routing {
  constructor(public routeElement: TRouteElements[]) {}

  path() {
    const routes = this.routeElement.reduce((acc: TPath[], item) => {
      if (item.path && item.element) {
        acc.push({
          path: item.path,
          element: item.element,
        });
      }

      if (item.children) {
        item.children.forEach((child) => {
          acc.push({
            path: child.path,
            element: child.element,
          });
        });
      }

      return acc;
    }, []);
    return routes;
  }

  menu(role?: string) {
    const routes = this.routeElement.reduce((acc: TMenu[], item) => {
      if (item.path && item.name) {
        if (!role && item.path === "/") {
          acc.push({
            key: "home",
            label: <NavLink to={"/"}>{item.name}</NavLink>,
          });
        }
        if (item.path !== "/") {
          acc.push({
            key: item.path,
            label: <NavLink to={`${role}/${item.path}`}>{item.name}</NavLink>,
          });
        }
      }

      // if (item.children) {
      //   acc.push({
      //     key: item.name,
      //     label: item.name,
      //     children: item.children.map((child) => {
      //       if (child.name) {
      //         return {
      //           key: child.path,
      //           label: (
      //             <NavLink to={`${role}/${child.path}`}>{child.name}</NavLink>
      //           ),
      //         };
      //       }
      //     }),
      //   });
      // }

      return acc;
    }, []);
    return routes;
  }
}
