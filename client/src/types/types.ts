import { ReactNode } from 'react';

export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;
export type VoidMethod = () => void;
export type ReactChildrenType = ReactNode | Array<ReactNode>;

export interface ILocalStorageData {
  something?: string;
}

export type WebsocketConnectionHandlerType = 'connection' | 'disconnection';
type ReplyStatusType = 'accepted' | 'refused' | 'waiting';

export interface IReply {
  _id?: string;
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note: string;
}
