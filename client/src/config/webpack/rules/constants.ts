import { Options as FileLoaderOptions } from 'file-loader';
import { Options as SWCLoaderOptions } from '@swc/core';

export const FILE_LOADER_OPTIONS: FileLoaderOptions = {
  outputPath: 'media',
  name: '[path][name].[ext]',
  esModule: false,
  publicPath: './media',
};
export const SVG_LOADER_OPTIONS = {
  typescript: true,
  ext: 'tsx',
  icon: true,
};
export const SWC_LOADER_OPTIONS = (isDevelopment: boolean, isTsx: boolean): SWCLoaderOptions => {
  return {
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: isTsx,
      },
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
      target: 'es2021',
      loose: false,
      minify: {
        mangle: false,
        compress: !isDevelopment,
      },
    },
    module: {
      type: 'es6',
    },
    minify: !isDevelopment,
    isModule: true,
  };
};
export const CSS_LOADER_OPTIONS = (isDevelopment: boolean) => ({
  modules: {
    localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64:8]',
    auto: (resPath: string) => resPath.includes('.module.'),
  },
});
