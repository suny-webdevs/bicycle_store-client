import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/addToCart/cartSlice";
import wishlistReducer from "./features/addToWishlist/wishlistSlice";
import loadingReducer from "./features/loading/loadingSlice";
import { baseApi } from "./api/baseApi";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistWishlistConfig = {
  key: "wishlist",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistReducer,
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
