"use client";

import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Images = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  gsap.registerPlugin(ScrollTrigger);
  const { language } = context;

  return (
    <Box
      id="image-about"
      key={language}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 8,
        pb: 10,
        position: "relative",
        flexWrap: "wrap",
        gap: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: 230, sm: 300, md: 380, lg: 430 },
          height: { xs: 230, sm: 300, md: 380, lg: 430 },
          background: "#C9DBFF",
          opacity: 0.4,
          borderRadius: "45%",
          top: { xs: "0%", md: "10%" },
          left: { xs: "50%", md: "auto" },
          right: { md: 0 },
          transform: { xs: "translateX(-50%)", md: "none" },
          filter: "blur(35px)",
          zIndex: 1,
        }}
      />

      {["/about/about1.jpg", "/about/about2.jpg"].map((src, i) => (
        <Box
          key={i}
          component="img"
          src={src}
          className={`about-${i}`}
          sx={{
            width: { xs: "80%", sm: "200px", md: "250px" },
            maxWidth: 330,
            borderRadius: 3,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transform: `rotate(${i * 5 - 5}deg)`,
            zIndex: 5,

            transition: "transform 0.3s ease",
            "&:hover": {
              transform: `rotate(0deg) scale(1.05)`,
            },
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          
          bottom: { xs: -45, sm: -55, md: -50 },
          left: { xs: "50%", md: "auto" },
          right: { md: 150 },
          transform: { xs: "translateX(-50%)", md: "none" },
          background: "linear-gradient(90deg,#7C4DFF,#586BFF)",
          borderRadius: "30px",
          px: { xs: 2, sm: 2.5 },
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          zIndex: 6,
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          minWidth: { xs: 180, sm: 200 },
        }}
      >
        <Box sx={{ display: "flex" , }}>
          {["user1.png", "user2.png", "user3.png"].map((u, i) => (
            <Box
              key={i}
              component="img"
              src={`/${u}`}
              alt={`user-${i}`}
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "2px solid #fff",
                mr: i !== 2 ? -1.5 : 0,
                display: { xs: "none", sm: "block" },
              }}
            />
          ))}
        </Box>

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: 13, sm: 14, md: 15 },
            whiteSpace: "nowrap",
          }}
        >
          {t("contact")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Images;
