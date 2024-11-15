import { Undefinable } from 'types/types';
import { RequestRESTMethodsEnum } from './types';

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
