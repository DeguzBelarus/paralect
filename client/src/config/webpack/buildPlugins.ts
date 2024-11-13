import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { MINI_CSS_EXTRACT_PLUGIN_OPTIONS } from './constants';

export const buildPlugins = (
  htmlPath: string,
  faviconPath: string,
  outputPath: string,
  isDevelopment: boolean,
): Array<WebpackPluginInstance> => {
  let plugins: Array<WebpackPluginInstance> = [];
  const progressWebpackPlugin = new ProgressPlugin();
  const circularDependencyPlugin = new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
  });
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: htmlPath,
    favicon: faviconPath,
    filename: 'index.html',
    publicPath: './',
  });
  const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
  });
  plugins = [
    progressWebpackPlugin,
    circularDependencyPlugin,
    htmlWebpackPlugin,
    forkTsCheckerWebpackPlugin,
  ];
  if (isDevelopment) {
    const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();
    plugins = [...plugins, reactRefreshWebpackPlugin];
  } else {
    const miniCssExtractPlugin = new MiniCssExtractPlugin(MINI_CSS_EXTRACT_PLUGIN_OPTIONS);
    plugins = [...plugins, miniCssExtractPlugin];
  }
  return plugins;
};
