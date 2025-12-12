import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";


const GetApp = () => {
    const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

  return (
    <Box
    key={language}
      sx={{
        width: "100%",
        py: 10,
        px: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        position:"relative",
        top:"220px",
        gap: 5,
        backgroundColor: "#f9f9f9",
      }}
    >
      
      <Box
        sx={{
          maxWidth: "629px",
          textAlign: { xs: "center", md: "left" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          {t("getApp_title")}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
        {t("getApp_text")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <img alt="getAppFrame"  src="/getAppFrame.png"/>

       
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/getApp.png"
          alt="Get App"
          style={{
            width: "100%",
            maxWidth: "420px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default GetApp;
