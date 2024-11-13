import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { IS_PRODUCTION } from 'constants/constants';
import { store } from 'redux/store';
import './index.scss';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (IS_PRODUCTION) {
  disableReactDevTools();
}

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(app);
