import { IRepliesResponseData } from 'redux/thunks/types';
import { IMainState } from './types';

export const updateState = (state: IMainState, payload: IRepliesResponseData) => {
  const { message, data, statusCode } = payload;
  const isMessagePositive = statusCode === 200;
  data && data?.length && (state.replies = data.reverse());
  state.systemMessage = {
    message,
    severity: isMessagePositive ? 'positive' : 'negative',
  };
};
