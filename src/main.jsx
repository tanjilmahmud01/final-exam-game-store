import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GameDataProvider } from "./context/GameFetchContext.jsx";
import { GameCartProvider } from "./context/GameCartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0DataProvider } from "./context/Auth0Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Auth0DataProvider>
        <BrowserRouter>
          <GameDataProvider>
            <GameCartProvider>
              <App />
            </GameCartProvider>
          </GameDataProvider>
        </BrowserRouter>
      </Auth0DataProvider>
    </Auth0Provider>
  </React.StrictMode>
);
