import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { IS_PRODUCTION } from 'constants/constants';
import { combinedReducer } from './combinedReducer';

export const store = configureStore({
  reducer: combinedReducer,
  devTools: !IS_PRODUCTION,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
