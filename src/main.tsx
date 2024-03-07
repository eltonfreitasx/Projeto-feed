import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider  } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-0a0zt12rbqhp01w3.us.auth0.com"
        clientId="DvaE9CDAPVxYf0XFuN6dwTz5Syz3Heeg"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
)
