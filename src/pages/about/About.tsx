import { Box, Container } from "@mui/material";
import Content from "./Content";
import Images from "./Images";
import Title from "./Title";

const About = () => {
  return (
    <Container  >
      <Box
        sx={{
          position: "relative",
          top: "40px",
          zIndex: 5,
        }}
      >
        <Title />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 6, md: 0 },
          py: { xs: 4, md: 8 },
        }}
      >
        <Content />
        <Images />
      </Box>
    </Container>
  );
};

export default About;
