import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/category-context";
import { ProductContextProvider } from "./context/product-context";
import { UserContextProvider } from "./context/user-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductContextProvider>
          <CategoryContextProvider>
            <App />
          </CategoryContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
