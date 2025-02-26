import { ReactNode } from "react";

export type TPath = {
  path: string;
  element: ReactNode;
};
export type TMenu =
  | {
      key: string;
      label: ReactNode;
      icon?: ReactNode;
      children?: TMenu[];
    }
  | undefined;

export type TRouteElements = {
  name: string;
  path: string;
  icon?: ReactNode;
  element?: ReactNode;
  children?: TRouteElements[];
};
