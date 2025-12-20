import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function Title() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");
  
    const { language } = context;
  
  return (
    <Box
    key={language}
      sx={{
        textAlign: "center",
        mb: 5,
   
        
      }}
    >


      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          fontWeight: "700",
          mb: 1,
          letterSpacing: "0.5px",
          display: "block",
          borderBottom: "2px solid #157EFD",
          pb: "4px",
          mx: "auto",
          width: "fit-content",
        }}
      >
      {t("Future")}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          opacity: 0.7,
          mt: 1.5,
          display: "block",
          pb: "4px",
          mx: "auto",
          width: "fit-content",
        }}
      >
      {t("subTitle")}
      </Typography>
    </Box>
  );
}

export default Title;
