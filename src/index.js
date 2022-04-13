import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import ClientList from "./page/client.page";
import ClientForm from "./page/client-form.page";
const theme = createTheme();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/client" element={<ClientList />} />
            <Route path="/client-form" element={<ClientForm />}/>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
