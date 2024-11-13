// responses
export interface IGeneralResponse {
  message: string;
  statusCode?: number;
  requestPath?: string;
  issueTime?: string;
}

export interface IServerReadyStateCheckResponse extends IGeneralResponse {
  readyState?: 'ready';
}
