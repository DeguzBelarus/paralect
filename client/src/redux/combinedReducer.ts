import { combineReducers } from '@reduxjs/toolkit';

import { reducer as mainReducer } from './slices/main/mainSlice';

export const combinedReducer = combineReducers({
  main: mainReducer,
});
