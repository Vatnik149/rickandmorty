import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootState'; // Update this path

const store = configureStore({
  reducer: rootReducer,
});

export default store;
