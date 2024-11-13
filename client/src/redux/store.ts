import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { IS_PRODUCTION } from 'constants/constants';
import { mainSlice } from './slices/main/mainSlice';
import { getPreloadedState } from './utils';
import { combinedReducer } from './combinedReducer';

export const store = configureStore({
  reducer: combinedReducer,
  devTools: !IS_PRODUCTION,
  preloadedState: {
    main: { ...mainSlice.getInitialState(), ...getPreloadedState() },
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
