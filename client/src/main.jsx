import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route.jsx";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./providers/CartProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={Route} />
      </CartProvider>
    </QueryClientProvider>
  </AuthProvider>
);
