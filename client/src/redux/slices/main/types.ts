import { ServerReadyState } from 'redux/types';
import { IReply } from 'types/types';

export interface IMainState {
  serverReadyState: ServerReadyState;
  replies: Array<IReply>;
}
