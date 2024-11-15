import { IS_PRODUCTION } from 'constants/constants';

// API URLs
export const REMOTE_SERVER_URL = 'https://paralect-server-production.up.railway.app/api';
export const DEVELOPMENT_SERVER_URL = 'http://localhost:5000/api';
export const API_URL = IS_PRODUCTION ? REMOTE_SERVER_URL : DEVELOPMENT_SERVER_URL;
export const GET_ALL_REPLIES_URL = `${API_URL}/reply`;
export const CREATE_ONE_REPLY_URL = `${API_URL}/reply`;
export const UPDATE_ONE_REPLY_URL = (replyId: string) => `${API_URL}/reply/update/${replyId}`;
export const DELETE_ONE_REPLY_URL = (replyId: string) => `${API_URL}/reply/delete/${replyId}`;
