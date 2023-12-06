import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { ManagedUIContext } from "./components/ui/context.tsx";
import "./styles/tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <ManagedUIContext>
      <GlobalStyle />
      <App />
    </ManagedUIContext>
  );
};

const router = createBrowserRouter([{ path: "/", element: <Main /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
