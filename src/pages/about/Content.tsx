import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Content = () => {
    const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");

gsap.registerPlugin(ScrollTrigger);
  const { language } = context;
useEffect(()=>{
  gsap.to("#content",{
  x:-300,
  opacity:0,
  scrollTrigger:{
    trigger:"#content",
    start:"top 40%",
    end:"bottom 20%",
    scrub:true
  }
})
},[])
  return (

     <div

     id="content"
      style={{
        width: '100%',
        textAlign: "center",
        marginRight: "auto",
        position:"relative",
      
      }}

      key={language}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "32px" },
          fontWeight: "700",
          lineHeight: { xs: "32px", sm: "38px", md: "45px" },
          width: { xs: "100%", md: "95%" },
          mb: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {t("about_desc")}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "13px", md: "15px" },
          opacity: 0.7,
          mt: 2,
          mb: 4,
          width: { xs: "100%", md: "95%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {t("about_desc2")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: { xs: "center", md: "flex-start" },
          flexWrap: "wrap",
        }}
      >
        <Button
          sx={{
            background: "linear-gradient(90deg,#7C4DFF,#586BFF)",
            color: "#fff",
            borderRadius: "30px",
            px: { xs: 3, sm: 4 },
            py: 1.4,
            textTransform: "none",
            fontWeight: 600,
            fontSize: { xs: "14px", md: "15px" },
          }}
        >
          {t("Download")}
        </Button>

        <Button
          sx={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "30px",
            px: { xs: 3, sm: 4 },
            py: 1.4,
            textTransform: "none",
            fontWeight: 600,
            color:"#1E1E1E",
            fontSize: { xs: "14px", md: "15px" },
          }}
        >
         {t("Know More")}
        </Button>
      </Box>
    </div>

  );
};

export default Content;
