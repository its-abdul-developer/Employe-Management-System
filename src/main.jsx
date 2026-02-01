import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { setLocalStorage } from "./utils/LocalStorage";

// // Initialize default localStorage only when not already present
// if (!localStorage.getItem("employess") || !localStorage.getItem("admin")) {
//   setLocalStorage();
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
