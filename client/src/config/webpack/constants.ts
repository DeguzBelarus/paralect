import { Configuration } from 'webpack';
import { PluginOptions } from 'mini-css-extract-plugin';
import { join } from 'path';

import { IWebpackPaths } from './types';

export const WEBPACK_PATHS: IWebpackPaths = {
  entry: join(__dirname, '../../../', 'src', 'index.tsx'),
  output: join(__dirname, '../../../', 'build'),
  src: join(__dirname, '../../../', 'src'),
  html: join(__dirname, '../../../', 'public', 'index.html'),
  favicon: join(__dirname, '../../../', 'public', 'favicon.svg'),
  devStaticDirectory: join(__dirname, '../../../../', 'my-archive-server', 'static'),
};
export const WEBPACK_OUTPUT_OPTIONS: Configuration['output'] = {
  path: WEBPACK_PATHS.output,
  publicPath: '/',
  filename: 'js/[name].[contenthash].js',
  chunkFilename: 'js/[name].[contenthash].js',
  asyncChunks: true,
  clean: true,
  compareBeforeEmit: true,
  devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]',
};
export const MINI_CSS_EXTRACT_PLUGIN_OPTIONS: PluginOptions = {
  filename: 'css/[name].[contenthash].css',
  chunkFilename: 'css/[name].[contenthash].css',
};
export const CLIENT_DEFAULT_PORT = 3000;

export enum WebpackDevtoolEnum {
  EVAL = 'eval',
  SOURCE_MAP = 'source-map',
  EVAL_SOURCE_MAP = 'eval-source-map',
  CHEAP_SOURCE_MAP = 'cheap-source-map',
  EVAL_CHEAP_SOURCE_MAP = 'eval-cheap-source-map',
  EVAL_CHEAP_MODULE_SOURCE_MAP = 'eval-cheap-module-source-map',
}
