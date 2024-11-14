import { RequestStatusType } from 'redux/types';
import { IReply, ISystemMessageData, Nullable } from 'types/types';

export interface IMainState {
  requestStatus: RequestStatusType;
  replies: Array<IReply>;
  systemMessage: ISystemMessageData;
  currentlyEditingReply: Nullable<IReply>;
  isModalWindowOpenedForCreation: boolean;
}
