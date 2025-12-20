import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Buttons = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language } = context;

  return (
    <Box
      key={language}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Android Button */}
      <Button
        aria-label="Download Android"
        variant="contained"
        href="https://play.google.com/store/apps/details?id=com.hussein.majid.trading&hl=ar"
        target="_blank"
        sx={{
          backgroundImage: "url('/android.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: { xs: "150px", sm: "200px" },
          height: { xs: "75px", sm: "100px" },
          padding: 0,
          minWidth: 0,
          textTransform: "none",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      {/* iOS Button */}
      <Button
        aria-label="Download iOS"
        variant="contained"
        href="https://apps.apple.com/iq/app/alwessam-express/id6741037368"
        target="_blank"
        sx={{
          backgroundImage: "url('/222.jfif')",
          backgroundPosition: "center",
          backgroundColor:"#fff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: { xs: "150px", sm: "200px" },
          height: { xs: "75px", sm: "100px" },
          padding: 0,
          minWidth: 0,
          textTransform: "none",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

export default Buttons;
