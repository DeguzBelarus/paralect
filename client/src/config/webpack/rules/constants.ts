import { Options as FileLoaderOptions } from 'file-loader';
import { Options as SWCLoaderOptions } from '@swc/core';
import { Options as SassOptions } from 'sass-loader';

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

type SassApiType = 'legacy' | 'modern' | 'modern-compiler';
export const SASS_LOADER_OPTIONS = (
  isDevelopment: boolean,
): SassOptions & Record<'api', SassApiType> => ({
  api: 'modern-compiler',
  sassOptions: {
    sourceMap: isDevelopment,
    outputStyle: 'compressed',
  },
});

export const CSS_LOADER_OPTIONS = (isDevelopment: boolean) => ({
  modules: {
    localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64:8]',
    auto: (resPath: string) => resPath.includes('.module.'),
  },
});
