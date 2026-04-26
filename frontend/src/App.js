import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyWhatsApp from "./components/StickyWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen flex flex-col bg-cream">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
              <Route path="/hizmet/:slug" element={<ServiceDetail />} />
              <Route path="/urunler" element={<Products />} />
              <Route path="/urunler/:slug" element={<ProductDetail />} />
              <Route path="/urun/:slug" element={<ProductDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <StickyWhatsApp />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
