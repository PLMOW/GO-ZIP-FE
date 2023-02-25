import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { QueryClientProvider, QueryClient } from 'react-query';
import Head from 'components/partials/Head';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Head />
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
