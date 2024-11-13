import { RuleSetRule } from 'webpack';

import { getCssLoader, getStyleLoader, getSassLoader } from './loaders';

export const buildCssRule = (isDevelopment: boolean): RuleSetRule => {
  const styleLoader = getStyleLoader(isDevelopment);
  const cssLoader = getCssLoader(isDevelopment);
  const sassLoader = getSassLoader(isDevelopment);
  return {
    test: /\.scss$/i,
    use: [styleLoader, cssLoader, sassLoader],
  };
};
