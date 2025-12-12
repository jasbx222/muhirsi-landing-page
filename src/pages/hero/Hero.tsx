import { Grid, Box } from "@mui/material";
import Content from "./Content";
import Image from "./Image";
import VectorOne from "../../components/ui/VectorOne";
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
        <VectorOne />
      </Box>
    </>
  );
};

export default Hero;
