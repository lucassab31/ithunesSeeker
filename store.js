import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./components/musicsSlice";

export default configureStore({
  reducer: {
    musics: musicReducer,
  },
});
