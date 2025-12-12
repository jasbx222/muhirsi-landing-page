import { Box, Container } from "@mui/material";
import Content from "./Content";
import Images from "./Images";
import Title from "./Title";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const About = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;
  const isRTL = language === "ar";

  return (
    <Container>
      {/* Title Section */}
      <Box
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
          gap: { xs: 6, md: 0 },
          py: { xs: 4, md: 8 },
        }}
      >
        <Content />
        <Images />
      </Box>
    </Container>
  );
};

export default About;
