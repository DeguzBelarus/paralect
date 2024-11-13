export type WebpackModeType = 'production' | 'development';

export interface IWebpackEnvironmentVariables {
  mode: WebpackModeType;
  port?: number;
}

export interface IWebpackPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  favicon: string;
  devStaticDirectory: string;
}
