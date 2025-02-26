import { categories } from "../constants/global";

export const categoryMenus = categories.map((item) => ({
  label: item,
  key: item,
}));
