import { Box } from "@mui/material";
import { useEffect } from "react";
import { gsap } from "gsap";
const Image = () => {
  useEffect(() => {
    gsap.to("#img", { opacity: 1, duration: 4 });
    // gsap.from("#img", { x: -200, opacity: 1, duration: 2 });
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <img
        id="img"
        src="/Vector2.png"
        style={{
          position: "absolute",
          height: "300px",
          width: "500px",
          zIndex: 2,
          opacity: 0.9,
        }}
        className=" opacity-0"
      />
      <img
        id="img"
        src="/Vector2.png"
        className=" opacity-0"
        style={{
          position: "absolute",
          height: "300px",
          width: "300px",

          zIndex: 2,
          opacity: 0.9,
        }}
      />

      {/* صورة الهاتف */}
      <img
        id="img"
        src="/mobile.png"
        className=" opacity-0"
        style={{
          height: "400px",
          width: "200px",
          position: "relative",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Image;
