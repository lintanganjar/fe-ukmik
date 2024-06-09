import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import Navbar from "@/components/section/Navbar.jsx";
import Sidebar from "./components/section/Sidebar.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthStore } from "./stores/useAuthStore.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Navbar />
            <App />
          <Toaster />
        </MainLayout>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
