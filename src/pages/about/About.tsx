"use client";

import { Box, Container } from "@mui/material";
import Content from "./Content";
import Images from "./Images";
import Title from "./Title";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  gsap.registerPlugin(ScrollTrigger);

  const { language } = context;
  const isRTL = language === "ar";

  return (
    <Container>
      <Box
        id="title"
        sx={{
          position: "relative",
          top: "40px",
          zIndex: 5,
          textAlign: isRTL ? "right" : "left",
        }}
      >
        <Title />
      </Box>

      {/* Content + Images Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: isRTL ? "row-reverse" : "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 6, md: 5 },
          py: { xs: 4, md: 8 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Content />
        </Box>

        <Box  sx={{ flex: 1 }}>
          <Images />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
