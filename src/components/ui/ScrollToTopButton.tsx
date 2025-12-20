import { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import { ArrowUp } from "lucide-react";


const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      {visible && (
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            zIndex: 1000,
          }}
        >
          <ArrowUp/>
        </Fab>
      )}
    </Box>
  );
};

export default ScrollToTopButton;
