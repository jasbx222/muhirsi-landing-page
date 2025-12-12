import { Grid, Box } from "@mui/material";
import Content from "./Content";
import Image from "./Image";
const Hero = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#6334FC",
          minHeight: "100vh",
          zIndex: -10,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Content />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Image />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, width: "100%" }} display={{ xs: "none", sm: "block" }}>
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
      </Box>
    </>
  );
};

export default Hero;
