import { Box, Button } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Buttons = () => {
      const context = useContext(LanguageContext);
      if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");
    
      const { language } = context;
    
  return (
    <Box key={language} sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#1E1E1E",
            borderRadius: "50px",
            padding: "10px 50px",
            textTransform: "none",
          }}
        >
          {t("Download")}
        </Button>

        <Button
          sx={{
            color: "#ffffff",
            px: { xs: 3, sm: 4, md: 6 },
            textTransform: "none",
            border: "none",
            borderBottom: "2px solid #ffffff",
            borderRadius: 0,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            minWidth: "99px",

            fontWeight: "600",
          }}
        >
          {t("Learn More")}
        </Button>
      </Box>
      <img
        src="/btnDownload.png"
        alt="Download"
        style={{
          width: "100%",
          position: "relative",
          top: "10px",
          maxWidth: "250px",
          marginTop: "0px",
        }}
      />
    </Box>
  );
};

export default Buttons;
