import { ResolveOptions } from 'webpack';

export const buildResolver = (srcPath: string): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  modules: [srcPath, 'node_modules'],
  mainFiles: ['index'],
  preferAbsolute: true,
});
