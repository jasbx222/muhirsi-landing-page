import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Images = () => {
      const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");
  
    const { language } = context;
  
  return (
    <Box
    key={language}
      sx={{
        width: { xs: "100%", md: "50%" },
        position: "relative",
        display: "flex",
        justifyContent: "center",
        mt: { xs: 5, md: 0 },
      }}
    >
      {/* Blob Background */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "220px", sm: "300px", md: "380px", lg: "430px" },
          height: { xs: "220px", sm: "300px", md: "380px", lg: "430px" },
          // background: "#C9DBFF",
          opacity: 0.7,
          borderRadius: "45%",
          top: { xs: "5%", md: "10%" },
          right: { xs: "50%", md: "0%" },
          transform: { xs: "translateX(50%)", md: "none" },
          filter: "blur(15px)",
          zIndex: 1,
        }}
      />

      {/* Mobile Image */}
      <img
        src="/mobile2.png"
        style={{
          width: "100%",
          maxWidth: "350px",
          transform: "rotate(-12deg)",
          zIndex: 5,
          position: "relative",
        }}
      />

      {/* CONNECT CARD */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-40px", sm: "-45px", md: "-50px" },
          right: { xs: "50%", sm: "50%", md: "220px" },
          transform: { xs: "translateX(50%)", sm: "translateX(50%)", md: "none" },

          background: "linear-gradient(90deg,#7C4DFF,#586BFF)",
          borderRadius: "30px",
          px: { xs: 2, sm: 2.5 },
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          zIndex: 6,
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            src="/user1.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "2px solid #fff",
              marginRight: "-10px",
            }}
          />
          <img
            src="/user2.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "2px solid #fff",
              marginRight: "-10px",
            }}
          />
          <img
            src="/user3.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "2px solid #fff",
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: "13px", sm: "14px", md: "15px" },
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
