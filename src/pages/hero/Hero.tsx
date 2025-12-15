import { Grid, Box } from "@mui/material";
import Content from "./Content";
import Image from "./Image";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {gsap} from 'gsap'
const Hero = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;
  const isRTL = language === "ar";
  useEffect(() => {
  gsap.to("#img-hero", {
    y: 50,            
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#img-hero",  
      start: "top 70%", 
      end: "bottom 20%", 
      scrub: true       
    }
  });
}, []);
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#6334FC",
          minHeight: "100vh",
          zIndex: -10,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6, md: 8 },
          direction: isRTL ? "rtl" : "ltr", 
        }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        {/* Content */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: isRTL ? "flex-end" : "flex-start" },
            textAlign: { xs: "center", md: isRTL ? "right" : "left" },
          }}
        >
          <Content />
        </Grid>

        {/* Image */}
        <Grid
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: isRTL ? "flex-start" : "flex-end" },
          }}
        >
          <Image />
        </Grid>
      </Grid>

      {/* Decorative Vector */}
      <Box sx={{ mt: 2, width: "100%" }} display={{ xs: "none", sm: "block" }}>
        <Box
        
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            bottom: "-110px",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <img
          id="img-hero"
            src="/VectorOne.png"
            alt="VectorOne"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
