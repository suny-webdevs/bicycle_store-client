import { MenuItemType } from "antd/es/menu/interface";
import { ReactNode } from "react";

export type TPath = {
  path: string;
  element: ReactNode;
};

export type TMenuItem = Pick<MenuItemType, "key" | "label">;

export type TMenu = TMenuItem & {
  children?: TMenu[] | undefined;
};

export type TRouteElements = {
  name: string;
  path: string;
  icon?: ReactNode;
  element?: ReactNode;
  children?: TRouteElements[];
};
