import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/category-context";
import { ProductContextProvider } from "./context/product-context";
import { UserContextProvider } from "./context/user-context";
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <UserContextProvider>
          <ProductContextProvider>
            <CategoryContextProvider>
              <App />
            </CategoryContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
