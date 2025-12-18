import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const GetApp = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

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
          <Box
            component="img"
            src="/getAppFrame.png"
            alt="Get App Store"
            sx={{
              width: { xs: 140, sm: 160 },
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Box>

   
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/getApp.png"
          alt="Get App"
          sx={{
            width: "100%",
            maxWidth: { xs: 280, sm: 360, md: 420 },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default GetApp;
