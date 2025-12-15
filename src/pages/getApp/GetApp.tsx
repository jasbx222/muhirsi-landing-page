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
        py: { xs: 8, sm: 10 },  
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        position:"relative",
        top:"200px",
        gap: { xs: 5, md: 8 },
        backgroundColor: "#f9f9f9",
      }}
    >
    
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "629px" },
          textAlign: { xs: "center", md: "left" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {t("getApp_title")}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          {t("getApp_text")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 3 },
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <img
            src="/getAppFrame.png"
            alt="getAppFrame"
            style={{
              width: "150px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>

   
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 5, md: 0 },
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
