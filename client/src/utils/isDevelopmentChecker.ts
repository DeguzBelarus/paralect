import { WebpackModeType } from 'config/webpack/types';

export const isDevelopmentChecker = (mode: WebpackModeType): boolean => mode === 'development';
