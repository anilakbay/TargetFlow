import React from "react";
import ReactDOM from "react-dom/client"; // 'react-dom' yerine 'react-dom/client' kullanılmalı
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

// createRoot kullanımı
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
