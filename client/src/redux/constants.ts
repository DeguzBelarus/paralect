import { IReply, ISystemMessageData } from 'types/types';

export const SYSTEM_MESSAGE_DATA_DEFAULTS: ISystemMessageData = {
  message: '',
  severity: 'neutral',
};

export const NEW_REPLY_DATA_DEFAULTS: IReply = {
  status: 'waiting',
  company: '',
  position: '',
  salaryFork: 0,
  note: '',
};
