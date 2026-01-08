import { StrictMode, type JSX } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/index";
import "./index.css";

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
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
