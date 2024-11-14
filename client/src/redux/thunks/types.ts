import { IReply, ReplyStatusType } from 'types/types';

// responses
export interface IGeneralResponse {
  message: string;
  statusCode?: number;
  requestPath?: string;
  issueTime?: string;
}

export interface IGeneralUpdateAndDeleteRequest {
  _id: string;
}

export interface IRepliesResponseData extends IGeneralResponse {
  data: Array<IReply>;
}

export class CreateReplyDto implements IReply {
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note?: string;
}

export class UpdateReplyDto implements IReply {
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note?: string;
}

export interface IUpdateOneReplyRequestData extends IGeneralUpdateAndDeleteRequest {
  dto: UpdateReplyDto;
}
