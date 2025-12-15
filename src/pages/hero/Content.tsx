import { Grid, Typography } from "@mui/material";
import Buttons from "./Buttons";
import { t } from "i18next";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
const Content = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = new SplitText(".word", { type: "words" });

    gsap.from(split.words, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrub: true    ,
    });
  }, []);
  return (
    <Grid
      key={language}
      container
      direction="column"
      alignItems={{ xs: "center", md: "flex-start" }}
      justifyContent="center"
      sx={{
        maxWidth: "100%",
        px: { xs: 3, sm: 4, md: 0 },
        py: { xs: 6, sm: 8, md: 12 },
        gap: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h2"
        className="relative top-2 sm:top-0"
        sx={{
          fontFamily: "Raleway",
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.2,
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          width: { xs: "100%", sm: "90%", md: "700px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {t("home_title")
          .split(" ")
          .map((word, index) => (
            <span
              key={index}
              className="word"
              style={{
                display: "inline-block",
                marginInlineEnd: "8px",
              }}
            >
              {word}
            </span>
          ))}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Raleway",
          fontWeight: 500,
          color: "#ffffff",
          lineHeight: 1.8,
          fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
          width: { xs: "100%", sm: "90%", md: "700px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {t("home_desc")}
      </Typography>

      <Grid
        sx={{ mt: { xs: 3, sm: 4, md: 6 }, width: "100%", maxWidth: "400px" }}
      >
        <Buttons />
      </Grid>
    </Grid>
  );
};

export default Content;
