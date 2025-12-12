import { Grid, Typography } from "@mui/material";
import Buttons from "./Buttons";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Content = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");
  
    const { language } = context;
  
  return (
    <Grid
    key={language}
      sx={{
        maxWidth: "972px",
        display: "flex",
        position:"relative",
        top:"15px",
        flexDirection: "column",
        gap: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Raleway",
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.2,
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          width: { xs: "100%", sm: "80%", md: "700px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {t("home_title")}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontFamily: "Raleway",
          fontWeight: 500,
          color: "#ffffff",
          lineHeight: 1.8,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.25rem" }, 
          maxWidth: { xs: "100%", sm: "90%", md: "713px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {t("home_desc")}
      </Typography>

      <Buttons />
    </Grid>
  );
};

export default Content;
