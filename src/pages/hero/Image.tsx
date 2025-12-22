import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
const Image = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
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

    <img
      src="/about/about3.jpg"
      style={{
        height: "400px",
        width: "200px",
        borderRadius: "6px",
        transition: "all 0.5s ease",
        opacity: show ? 1 : 0,
        transform: show ? "scale(1.05)" : "scale(1)",
      }}
    />

    </Box>
  );
};

export default Image;
