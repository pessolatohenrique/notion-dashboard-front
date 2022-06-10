import { ReactElement } from "react";

export interface MenuItem {
  table: string;
  link: string;
  icon: ReactElement;
}

export interface MenuList {
  items: Array<MenuItem>;
}
