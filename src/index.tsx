import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/properties/layout/Layout";
import Plans from "./components/registration/Plans/Plans";
import Authentication from "./components/authentication/authentication";
import { AuthProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <FormProvider>
          <Router>
            <Routes>
              <Route path="property/*" element={<Layout />} />
              <Route path="pricing" element={<Plans />} />
              <Route path="*" element={<Authentication />} />
            </Routes>
          </Router>
        </FormProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
