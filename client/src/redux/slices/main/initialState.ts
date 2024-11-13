import { IMainState } from './types';

export const MAIN_SLICE_INITIAL_STATE: IMainState = {
  serverReadyState: 'unknown',
  replies: [],
};
