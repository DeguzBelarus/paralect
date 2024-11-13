import { RuleSetRule } from 'webpack';

import { buildCssRule } from './cssRule';
import { svgLoader, fileLoader } from './loaders';
import { buildSwcLoader } from './buildSwcLoader';

export const buildRules = (isDevelopment: boolean): Array<RuleSetRule> => {
  const fileRule: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2|mp4|webp)$/i,
    use: [fileLoader, 'webp-loader'],
  };
  const svgRule: RuleSetRule = {
    test: /\.svg$/i,
    use: [svgLoader, fileLoader],
  };
  const swcTsLoader = buildSwcLoader(isDevelopment, false);
  const swcTsxLoader = buildSwcLoader(isDevelopment, true);
  const cssRule = buildCssRule(isDevelopment);
  return [fileRule, svgRule, swcTsLoader, swcTsxLoader, cssRule];
};
