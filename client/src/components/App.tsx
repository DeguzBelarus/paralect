import { FC, useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

import { getServerReadyState, setServerReadyState } from 'redux/slices/main/exports';
import { websocket } from 'config/websockets/websocket';
import { WebsocketConnectionHandlerType } from 'types/types';
import { MainPage } from 'pages/MainPage/MainPage';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const isServerReady = useAppSelector(getServerReadyState) === 'ready';

  const websocketsConnectionHandler = useCallback(
    (type: WebsocketConnectionHandlerType) => {
      if (type === 'connection') {
        !isServerReady && dispatch(setServerReadyState('ready'));
        return console.log('WebSocket connection has been established...');
      }
      if (type === 'disconnection') {
        isServerReady && dispatch(setServerReadyState('awakening'));
        return console.log('WebSocket connection has been lost...');
      }
    },
    [dispatch, isServerReady],
  );

  useEffect(() => {
    websocket.on('connect', () => websocketsConnectionHandler('connection'));
    websocket.on('disconnect', () => websocketsConnectionHandler('disconnection'));
    return () => {
      websocket.off('connect', () => websocketsConnectionHandler('connection'));
      websocket.off('disconnect', () => websocketsConnectionHandler('disconnection'));
    };
  }, [websocketsConnectionHandler]);
  return (
    <>
      <MainPage />
    </>
  );
};
