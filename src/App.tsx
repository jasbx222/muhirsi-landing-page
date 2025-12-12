
import { Box } from "@mui/material";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import About from "./pages/about/About";
import FAQ from "./pages/faq/Faq";
import Future from "./pages/future/Future";
import GetApp from "./pages/getApp/GetApp";
import Hero from "./pages/hero/Hero";
import Testimonials from "./pages/testimonials/Testimonials";

function App() {
  return (
    <Box>
      
      <Hero />
      <About />
      <Testimonials/>
      <Future/>
      <FAQ/>
      <GetApp/>
      <Footer/>
    </Box>
  );
}

export default App;
