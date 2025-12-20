import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { t } from "i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
export default function Future() {
  gsap.registerPlugin(ScrollTrigger);
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

 

  return (
 <Box >
  <Title/>
     <Box
      key={language}
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: `url('/bg-future.png')`,
      }}
    >
   
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-between items-center gap-12 lg:gap-24">
          <div
            id="img-future"
            className="relative w-full sm:w-72 md:w-80 lg:w-96 flex justify-center"
          >
            <div className="absolute left-1/2 sm:left-[60%] md:left-[230px] -top-12 w-16 sm:w-20 h-16 sm:h-20 opacity-30">
              <img src="/gray-dots.png" alt="dots" className="w-full h-full" />
            </div>
            <div className="absolute right-1/2 sm:right-[60%] md:right-[300px] -bottom-6 w-16 sm:w-20 h-16 sm:h-20 opacity-20">
              <img src="/gray-dots.png" alt="dots" className="w-full h-full" />
            </div>

            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ borderRadius: 28 }}
            >
              {["/about/about3.jpg"].map((src, i) => (
                <Box
                  key={i}
                  component="img"
                  src={src}
                  alt={`about-${i}`}
                  sx={{
                    width: { xs: "80%", sm: "200px", md: "250px" },
                    maxWidth: 330,
                    borderRadius: 3,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transform: `rotate(${i * 5 - 5}deg)`,
                    zIndex: 5,
                    position: "relative",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: `rotate(0deg) scale(1.05)`,
                    },
                  }}
                />
              ))}
            </div>
          </div>

          <div
            id="text-future"
            className="flex-1 max-w-xl text-left px-2 sm:px-0"
          >
            <h1 className="text-xl text-center sm:text-left    lg:text-3xl  font-extrabold leading-tight text-gray-900">
              {t("future_subtitle")} <br />
              {t("future_subtitle2")}
            </h1>

            <p className="mt-8 text-center sm:text-left relative top-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              {t("future_text")}
            </p>

            <div className="mt-8 flex relative top-8 flex-col sm:flex-row items-center gap-4">
              <Button
                variant="contained"
                className="w-[200px] sm:w-full"
                sx={{
                  textTransform: "none",
                  background: "linear-gradient(90deg,#6f3cff,#7a3bff)",
                  boxShadow: "0 8px 24px rgba(111,60,255,0.18)",
                  borderRadius: "999px",
                  paddingX: { xs: 2, sm: 3 },
                  paddingY: 1.2,
                  fontWeight: 700,
                  // width: "100%",
                }}
              >
                {t("Download")}
              </Button>

              <Button
                variant="outlined"
                className="w-[200px] sm:w-full"
                sx={{
                  textTransform: "none",
                  borderRadius: "999px",
                  paddingX: { xs: 2, sm: 3 },
                  paddingY: 1.05,
                  borderColor: "#e6e6e6",
                  color: "#333",
                  fontWeight: 600,
                  // width: "100%",
                }}
              >
                {t("Know More")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
 </Box>
  );
}
