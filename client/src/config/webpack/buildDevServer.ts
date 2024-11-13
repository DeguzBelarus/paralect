import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (
  port: number,
  devStaticDirectory: string,
  isDevelopment: boolean,
): WebpackDevServerConfiguration =>
  isDevelopment
    ? {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
          logging: 'info',
          progress: true,
          reconnect: true,
        },
        static: {
          publicPath: '/',
          directory: devStaticDirectory,
        },
      }
    : undefined;
