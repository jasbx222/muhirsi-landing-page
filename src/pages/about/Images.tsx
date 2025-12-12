import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Images = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

  return (
    <Box
      key={language}
      sx={{
        width: { xs: "100%", md: "50%" },
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 8, md: 0 },
        pb: { xs: 10, sm: 12, md: 0 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: "230px", sm: "300px", md: "380px", lg: "430px" },
          height: { xs: "230px", sm: "300px", md: "380px", lg: "430px" },
          background: "#C9DBFF",
          opacity: 0.4,
          borderRadius: "45%",
          top: { xs: "0%", md: "10%" },
          left: { xs: "50%", md: "auto" },
          right: { md: "0%" },
          transform: { xs: "translateX(-50%)", md: "none" },
          filter: "blur(25px)",
          zIndex: 1,
        }}
      />
      <img
        src="/mobile2.png"
        style={{
          width: "100%",
          maxWidth: "330px",
          transform: "rotate(-10deg)",
          zIndex: 5,
          position: "relative",
        }}
        alt="about"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-45px", sm: "-55px", md: "-50px" },
          left: { xs: "50%", md: "auto" },
          right: { md: "150px" },
          transform: { xs: "translateX(-50%)", md: "none" },

          background: "linear-gradient(90deg,#7C4DFF,#586BFF)",
          borderRadius: "30px",
          px: { xs: 2, sm: 2.5 },
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          zIndex: 6,
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          minWidth: { xs: "180px", sm: "200px" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          {["user1.png", "user2.png", "user3.png"].map((u, i) => (
            <img
              className="hidden sm:block"
              key={i}
              src={`/${u}`}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "2px solid #fff",
                marginRight: i !== 2 ? "-10px" : "0px",
              }}
              alt="about-users"
            />
          ))}
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
