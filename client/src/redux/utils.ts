import { ILocalStorageData, Nullable, Undefinable } from 'types/types';
import { RequestRESTMethodsEnum } from './types';
import { LOCAL_STORAGE_SAVE_NAME } from 'constants/constants';

export const universalFetch = (
  url: string,
  method: RequestRESTMethodsEnum,
  body?: string | FormData,
): Undefinable<Promise<Response>> => {
  try {
    if (typeof body !== 'string') {
      return fetch(url, {
        method,
        body,
      });
    } else {
      return fetch(url, {
        method,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (exception: unknown) {
    if (exception instanceof Error) {
      console.error('\x1b[40m\x1b[31m\x1b[1m', exception.message);
    }
  }
};

export const getPreloadedState = (): ILocalStorageData => {
  try {
    const localStorageData: Nullable<string> = localStorage.getItem(LOCAL_STORAGE_SAVE_NAME);
    if (!localStorageData) {
      return {
        something: 'something',
      };
    } else {
      const { something } = JSON.parse(localStorageData) as ILocalStorageData;
      return {
        something,
      };
    }
  } catch (error) {
    console.error(error);
  }
};

interface IQueryParamData {
  key: string;
  value: string;
}

export const generateUrlQueryParams = (...queryParams: Array<IQueryParamData>) => {
  if (!queryParams.length) {
    throw new Error('Please provide a query params');
  }
  const queryParamsString = new URLSearchParams();
  queryParams.forEach((queryParam) => {
    const { key, value } = queryParam;
    queryParamsString.set(key, value);
  });
  return `?${queryParamsString}`;
};
