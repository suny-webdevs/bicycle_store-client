import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IListItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface IListState {
  items: IListItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: IListState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<IListItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromList: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearList: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToList, removeFromList, clearList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
