import { Configuration } from 'webpack';

import { buildWebpackConfig } from './src/config/webpack/buildConfig';
import { IWebpackEnvironmentVariables } from './src/config/webpack/types';
import { CLIENT_DEFAULT_PORT, WEBPACK_PATHS } from './src/config/webpack/constants';
import { isDevelopmentChecker } from './src/utils/isDevelopmentChecker';

export default (variables: IWebpackEnvironmentVariables): Configuration => {
  const { port, mode } = variables;
  return buildWebpackConfig(
    mode ?? 'development',
    Number(port) || CLIENT_DEFAULT_PORT,
    WEBPACK_PATHS,
    isDevelopmentChecker(mode),
  );
};
