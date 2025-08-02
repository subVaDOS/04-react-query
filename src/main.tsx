import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
