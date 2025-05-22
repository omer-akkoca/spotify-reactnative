import { configureStore } from "@reduxjs/toolkit";
import favoriteSongsReducer from "./slices/favorite_songs";

const store = configureStore({
  reducer: {
    favoriteSongs: favoriteSongsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;