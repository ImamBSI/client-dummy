import { StrictMode, type JSX } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/index";
import "./index.css";
import ForgotPassword from "./pages/ForgotPassword";
import Page1 from "./pages/page-1";
import Page2 from "./pages/page-2";
import Page3 from "./pages/page-3";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
