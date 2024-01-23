import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface ModelTypes {
  modelData: { [key: string]: string }[];
}

const initialState: ModelTypes = { modelData: [] };

const modelSlice = createSlice({
  name: "car-models",
  initialState: initialState,
  reducers: {
    addModel(state, action) {
      let updateState = {
        ...state,
        modelData: [...state.modelData, { ...action.payload }],
      };
      return updateState;
    },
  },
});

const store = configureStore({
  reducer: {
    carModel: modelSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const modelActions = modelSlice.actions;

export default store;
