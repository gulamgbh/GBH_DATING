import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GoogleOAuthProvider
        clientId="81334359658-s67qjvsqj9up3918dt01hcv78aakg4pj.apps.googleusercontent.com"
      >
        <Provider store={store}>
          <App />
        </Provider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
