import { Box, Button, TextField, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export const Footer = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

  return (
    <Box
    key={language}
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
        position: "relative",
        top: "220px",
      }}
    >
      <footer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
         
          <Box sx={{ maxWidth: 300 }}>
            <img
              src="/Logo2.png"
              alt="logo"
              style={{ width: "120px", marginBottom: "15px" }}
            />

            <Typography sx={{ opacity: 0.7, mb: 2, fontSize: "0.9rem" }}>
              {t("footer_title")}
            </Typography>

            <Typography sx={{ opacity: 0.5, fontSize: "0.8rem" }}>
              {t("footer_text")}
            </Typography>
          </Box>

         
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1 }}>{t("Pages")}</Typography>

            {["Home", "Services", "About", "Contact Us", "Blog"].map(
              (item) => (
                <Typography
                  key={item}
                  sx={{
                    cursor: "pointer",
                    opacity: 0.7,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {t(item)}
                </Typography>
              )
            )}
          </Box>
          <Box sx={{ maxWidth: 300 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>{t("Newsletter")}</Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column", 
                gap: 1.5,
                alignItems: "flex-end", 
              }}
            >
              <TextField
                variant="filled"
                fullWidth
                placeholder="Email address..."
                sx={{
                  // backgroundColor: "#fff",
                  borderRadius: "6px",
                  color: "#fff",
                  borderBottom: "2px solid #fff",
                  boxShadow: "0px",
                  "& .MuiInputBase-root": {
                    height: 45,
                    color: "#fff",
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#157EFD",
                  px: 4,
                  borderRadius: "8px",
                  height: "49px",
                  width: "79px",
                  "&:hover": { backgroundColor: "#0d6eda" },
                }}
              >
                {t("Send")}
              </Button>
            </Box>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};
