import { io } from 'socket.io-client';

import { WEBSOCKETS_URL, WEBSOCKETS_TRANSPORTS } from './constants';

export const websocket = io(WEBSOCKETS_URL, { transports: WEBSOCKETS_TRANSPORTS });
