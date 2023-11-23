
import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice'; // Adjust the path as needed

const rootReducer = combineReducers({
  filters: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
