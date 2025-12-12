import { Box } from "@mui/material";

const Image = () => {

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
        src="/Vector2.png"
        style={{
          position: "absolute",
          height: "300px",
          width: "500px",
          zIndex: 2,
          opacity: 0.9,
        }}
      />
      <img
        src="/Vector2.png"
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
        src="/mobile.png"
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
