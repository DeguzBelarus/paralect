import { Configuration } from 'webpack';

import { WebpackDevtoolEnum } from '../constants';

export const getDevtool = (isDevelopment: boolean): Configuration['devtool'] => {
  return isDevelopment
    ? WebpackDevtoolEnum.EVAL_CHEAP_MODULE_SOURCE_MAP
    : WebpackDevtoolEnum.SOURCE_MAP;
};
