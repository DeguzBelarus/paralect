import { IS_PRODUCTION } from 'constants/constants';

// API URLs
export const REMOTE_SERVER_WEBSOCKETS_URL = 'https://paralect-server.onrender.com';
export const DEVELOPMENT_SERVER_WEBSOCKETS_URL = 'http://localhost:5000';
export const REMOTE_SERVER_URL = 'https://paralect-server.onrender.com/api';
export const DEVELOPMENT_SERVER_URL = 'http://localhost:5000/api';
export const API_URL = IS_PRODUCTION ? REMOTE_SERVER_URL : DEVELOPMENT_SERVER_URL;
