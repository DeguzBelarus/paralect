import { RequestStatusType } from 'redux/types';
import { IReply, Nullable } from 'types/types';

export interface IMainState {
  requestStatus: RequestStatusType;
  replies: Array<IReply>;
  currentlyEditingReply: Nullable<IReply>;
  newReplyData: IReply;
  isModalWindowOpenedForCreation: boolean;
  isNewReplyStatusSelected: boolean;
  validationErrorMessage: string;
}
