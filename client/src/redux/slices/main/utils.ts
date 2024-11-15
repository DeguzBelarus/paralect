import { IRepliesResponseData } from 'redux/thunks/types';
import { IMainState } from './types';

export const updateState = (state: IMainState, payload: IRepliesResponseData) => {
  const { data } = payload;
  data && data?.length && (state.replies = data.reverse());
};
