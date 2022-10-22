import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from '@/store';
import "normalize.css"; // 重置css
import "@/assets/css/index.less";
import App from "./App";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // 异步组件还在会报错
  <Suspense fallback={<h3>loading</h3>}>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </Suspense>
);