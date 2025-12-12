import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import { StepBack, StepForward } from "lucide-react";
import { data } from ".";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Testimonials() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;
  const isRTL = language === "ar"; 
  return (
    <Box
      key={language}
      display="flex"
      justifyContent="center"
      mt={{ xs: 6, sm: 10 }}
      px={{ xs: 2, sm: 4 }}
    >
      <Box
        position="relative"
        width="100%"
        maxWidth="1200px"
        borderRadius={3}
        p={{ xs: 2, sm: 4, md: 5 }}
      >
        {/* Title */}
        <Box textAlign="center" mb={5}>
          <Typography
            borderBottom={"2px solid #7FACD6"}
            variant="h5"
            display="inline-block"
            fontWeight="600"
          >
            {t("TESTIMONIALS")}
          </Typography>
          <Typography mt={2} variant="body2" color="text.secondary">
            {t("sound_client")}
          </Typography>
        </Box>

        {/* Cards */}
        <Card
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
            p: { xs: 2, md: 3 },
            boxShadow: "none",
            justifyItems: "center",
            direction: isRTL ? "rtl" : "ltr", 
          }}
        >
          {data.map((item, i) => (
            <CardContent
              key={i}
              sx={{
                width: "100%",
                maxWidth: 330,
                height: "auto",
                borderRadius: 3,
                boxShadow: "0 2px 13px 2px #0000000F",
                p: 4,
                textAlign: "center",
              }}
            >
              <Avatar
                src={item.img}
                sx={{
                  width: 70,
                  height: 70,
                  mx: "auto",
                  mb: 2,
                }}
              />

              <Typography variant="h6" fontWeight="bold">
                {t(item.name)}
              </Typography>

              <Typography
                variant="caption"
                color="#598496"
                display="block"
                mb={2}
              >
                {item.date}
              </Typography>

              <Typography color="text.secondary">{t(item.text)}</Typography>
            </CardContent>
          ))}
        </Card>

        {/* Navigation Buttons */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: isRTL ? "auto" : { xs: 10, md: -20 },
            right: isRTL ? { xs: 10, md: -20 } : "auto",
            transform: "translateY(-50%)",
            display: { xs: "none", md: "flex" },
            width: 60,
            height: 60,
            bgcolor: "#E2E2E2",
            "&:hover": { bgcolor: "#157EFD" },
          }}
        >
          <StepBack />
        </IconButton>

        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: isRTL ? "auto" : { xs: 10, md: -20 },
            left: isRTL ? { xs: 10, md: -20 } : "auto",
            transform: "translateY(-50%)",
            display: { xs: "none", md: "flex" },
            width: 60,
            height: 60,
            bgcolor: "#157EFD",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <StepForward />
        </IconButton>
      </Box>
    </Box>
  );
}
