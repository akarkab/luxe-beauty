import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, type Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import PlaceholderPage from "./components/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/new-arrivals" element={<PlaceholderPage title="Nouveautés" description="Découvrez nos dernières créations cosmétiques exclusives." />} />
            <Route path="/bestsellers" element={<PlaceholderPage title="Meilleures Ventes" description="Nos produits les plus populaires et les mieux notés par nos clientes." />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<PlaceholderPage title="Mon Compte" description="Gérez votre profil, vos commandes et vos préférences." />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Properly handle React root creation to avoid double mounting warnings
const container = document.getElementById("root")!;

// Check if we're in development mode and handle hot reloading
let root: Root;

if (import.meta.hot) {
  // In development mode, store the root in a global variable to persist across HMR
  if (!(window as any).__react_root) {
    (window as any).__react_root = createRoot(container);
  }
  root = (window as any).__react_root;
} else {
  // In production, just create the root normally
  root = createRoot(container);
}

root.render(<App />);
