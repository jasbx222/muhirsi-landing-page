import { Box } from "@mui/material";
import "./App.css";
import About from "./pages/about/About";
import Feature from "./pages/feature/Feature";
import GetApp from "./pages/getApp/GetApp";
import Hero from "./pages/hero/Hero";

function App() {
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Box id="home" sx={{ mb: { xs: 4, md: 8 } }}> 
        <Hero />
      </Box>

      <Box id="about" sx={{ mb: { xs: 4, md: 8 } }}>
        <About />
      </Box>

      
      <Box id="future" sx={{ mb: { xs: 4, md: 8 } }}>
        <Feature />
      </Box>

      <Box id="getApp" sx={{ mb: { xs: 4, md: 8 } }}>
        <GetApp />
      </Box>
    </Box>
  );
}

export default App;
