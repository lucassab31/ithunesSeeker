import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

// {id : freijerio, text:"fheirfheriu", completed: true/false}

const musicsSlice = createSlice({
  name: "musics",
  initialState: [],
  reducers: {
    addMusic: (state, action) => {
      let id = uuid();
      return [...state, { id: id, track: action.payload, completed: false }];
    },
    removeMusic: (state, action) => {
      return state.filter((elm) => elm.id != action.payload);
    }
  },
});

export const { addMusic, removeMusic } = musicsSlice.actions;
export const musicSelector = (state) => state.musics;

export default musicsSlice.reducer;
