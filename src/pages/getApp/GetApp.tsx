import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import Buttons from "../hero/Buttons";

const GetApp = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

  const images = [
    "/about/about3.jpg",
    "/about/about1.jpg",
    "/about/about2.jpg",
  ];

  return (
    <Box
      key={language}
      sx={{
        width: "100%",
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 6, md: 10 },
        backgroundColor: "#f9f9f9",
        overflow: "hidden",
      }}
    >
      {/* نص وعنوان */}
      <Box
        sx={{
          maxWidth: 640,
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              md: "2.4rem",
              lg: "2.8rem",
            },
          }}
        >
          {t("getApp_title")}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            mb: 4,
            fontSize: {
              xs: "0.95rem",
              sm: "1rem",
              md: "1.1rem",
            },
            lineHeight: 1.7,
          }}
        >
          {t("getApp_text")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Buttons />
        </Box>
      </Box>

      {/* صور الدرج */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        {images.map((src, index) => (
          <Box
            key={src}
            component="img"
            src={src}
            alt={`Get App ${index + 1}`}
            sx={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 2,
              objectFit: "cover",
              // جعل بعض الصور أعلى أو أسفل لإعطاء تأثير الدرج
              mt: index === 1 ? { xs: 0, md: 4 } : 0,
              mb: index === 2 ? { xs: 0, md: 4 } : 0,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GetApp;
