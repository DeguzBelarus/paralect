import { RuleSetRule } from 'webpack';

import { SWC_LOADER_OPTIONS } from './constants';

export const buildSwcLoader = (isDevelopment: boolean, isTsx: boolean): RuleSetRule => {
  const swcLoader: RuleSetRule = {
    loader: 'swc-loader',
    options: SWC_LOADER_OPTIONS(isDevelopment, isTsx),
  };
  return {
    test: isTsx ? /\.tsx$/i : /\.ts$/i,
    exclude: /(node_modules)/,
    use: [swcLoader],
  };
};
