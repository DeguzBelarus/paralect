import { RuleSetRule } from 'webpack';
import { loader as miniCSSExtractLoader } from 'mini-css-extract-plugin';

import { Undefinable } from 'types/types';
import {
  CSS_LOADER_OPTIONS,
  FILE_LOADER_OPTIONS,
  SASS_LOADER_OPTIONS,
  SVG_LOADER_OPTIONS,
} from './constants';

export const getStyleLoader = (isDevelopment: boolean): Undefinable<string> =>
  isDevelopment ? 'style-loader' : miniCSSExtractLoader;
export const getCssLoader = (isDevelopment: boolean): RuleSetRule => ({
  loader: 'css-loader',
  options: CSS_LOADER_OPTIONS(isDevelopment),
});
export const getSassLoader = (isDevelopment: boolean): RuleSetRule => ({
  loader: 'sass-loader',
  options: SASS_LOADER_OPTIONS(isDevelopment),
});
export const fileLoader: RuleSetRule = {
  loader: 'file-loader',
  options: FILE_LOADER_OPTIONS,
};
export const svgLoader: RuleSetRule = {
  loader: '@svgr/webpack',
  options: SVG_LOADER_OPTIONS,
};
