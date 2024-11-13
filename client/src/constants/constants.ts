export const IS_DESKTOP = !navigator.maxTouchPoints;
export const IS_PRODUCTION = process.env.NODE_ENV !== 'development';
export const LOCAL_STORAGE_SAVE_NAME = 'localStorage-save';