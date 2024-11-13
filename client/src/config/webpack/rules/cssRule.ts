import { RuleSetRule } from 'webpack';

import { getCssLoader, getStyleLoader, sassLoader } from './loaders';

export const buildCssRule = (isDevelopment: boolean): RuleSetRule => {
  const styleLoader = getStyleLoader(isDevelopment);
  const cssLoader = getCssLoader(isDevelopment);
  return {
    test: /\.scss$/i,
    use: [styleLoader, cssLoader, sassLoader],
  };
};
