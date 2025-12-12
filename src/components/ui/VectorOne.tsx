import { Box } from "@mui/material";

const VectorOne = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: "-150px",
        // right:"20px",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <img
        src="/VectorOne.png"
        alt="VectorOne"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

export default VectorOne;
