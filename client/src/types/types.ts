import { ReactNode } from 'react';

export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;
export type VoidMethod = () => void;
export type ReactChildrenType = ReactNode | Array<ReactNode>;

export interface ILocalStorageData {
  something?: string;
}
