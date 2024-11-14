import { FC } from 'react';

import { MainPage } from 'pages/MainPage/MainPage';
import { Notificator } from './Notificator/Notificator';

export const App: FC = () => {
  return (
    <>
      <Notificator />
      <MainPage />
    </>
  );
};
