import { IS_PRODUCTION } from 'constants/constants';
import { WebsocketTransportType } from './types';
import {
  DEVELOPMENT_SERVER_WEBSOCKETS_URL,
  REMOTE_SERVER_WEBSOCKETS_URL,
} from 'redux/thunks/constants';

export const WEBSOCKETS_URL = IS_PRODUCTION
  ? REMOTE_SERVER_WEBSOCKETS_URL
  : DEVELOPMENT_SERVER_WEBSOCKETS_URL;
export const WEBSOCKETS_TRANSPORTS: Array<WebsocketTransportType> = IS_PRODUCTION
  ? ['polling']
  : ['websocket'];
