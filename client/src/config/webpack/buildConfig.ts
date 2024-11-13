import { Configuration } from 'webpack';

import { IWebpackPaths, WebpackModeType } from './types';
import { WEBPACK_OUTPUT_OPTIONS } from './constants';
import { buildResolver } from './buildResolver';
import { getDevtool } from './utils/getDevtool';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildRules } from './rules/buildRules';

export const buildWebpackConfig = (
  mode: WebpackModeType,
  port: number,
  { entry, html, src, favicon, devStaticDirectory, output }: IWebpackPaths,
  isDevelopment: boolean,
): Configuration => ({
  entry,
  output: WEBPACK_OUTPUT_OPTIONS,
  mode,
  resolve: buildResolver(src),
  plugins: buildPlugins(html, favicon, output, isDevelopment),
  module: {
    rules: buildRules(isDevelopment),
  },
  devtool: getDevtool(isDevelopment),
  devServer: buildDevServer(port, devStaticDirectory, isDevelopment),
  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
