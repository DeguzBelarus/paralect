// redux types
export type RequestStatusType = 'idle' | 'loading' | 'failed';
export type ServerReadyState = 'unknown' | 'ready' | 'awakening';

// redux enums
export enum RequestRESTMethodsEnum {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}
