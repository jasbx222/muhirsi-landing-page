import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import ScrollToTopButton from "./components/ui/ScrollToTopButton.tsx";
// import Footer from "./components/footer/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Navbar />
        <ScrollToTopButton/>
        <App />
        <Footer/>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
