import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

const App = lazy(() =>
  import("./App").then((module) => ({ default: module.App }))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
