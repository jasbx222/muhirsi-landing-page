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
      if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");
    
      const { language } = context;
    
  

  return (
    <Box  key={language} display="flex" justifyContent="center" mt={10}>
      <Box position="relative" width="90%" borderRadius={3} p={5}>
        <Box textAlign="center" mb={5}>
          <Typography
            className="  text-center "
            borderBottom={"2px solid #7FACD6"}
            variant="h5"
              display="inline-block"
            fontWeight="600"
          >
            {t("TESTIMONIALS")}
          </Typography>
          <Typography  mt={2} variant="body2" color="text.secondary">
         {t("sound_client")}
          </Typography>
        </Box>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            p: 3,
            boxShadow: "none",
          }}
        >
          {data.map((item, i) => (
            <CardContent
              key={i}
              sx={{
                width: 330,
                height: 360,
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
                  position: "relative",
                  right: "80px",
                }}
              />
              <Typography
                sx={{
                  position: "relative",
                  right: "60px",
                }}
                variant="h6"
                fontWeight="bold"
              >
                {t(item.name)}
              </Typography>
              <Typography
                variant="caption"
                color="#598496"
                display="block"
                mb={2}
                sx={{
                  position: "relative",
                  right: "90px",
                }}
              >
                {item.date}
              </Typography>
              <Typography
                sx={{ position: "relative", right: "30px" }}
                color="text.secondary"
              >
                {t(item.text)}
              </Typography>
            </CardContent>
          ))}
        </Card>

        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: -20,
            width: "74px",
            height: "74px",
            borderRadius: "74px",
            transform: "translateY(-50%)",
            bgcolor: "#E2E2E2",
            color: "white",
            "&:hover": { bgcolor: "#157EFD" },
          }}
        >
          <StepBack />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            width: "74px",
            height: "74px",
            borderRadius: "74px",
            right: -20,
            transform: "translateY(-50%)",
            bgcolor: "#157EFD",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
            boxShadow: 3,
          }}
        >
          <StepForward />
        </IconButton>
      </Box>
    </Box>
  );
}
