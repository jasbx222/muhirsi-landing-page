import { Box, Typography } from "@mui/material";


const GetApp = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        px: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        position:"relative",
        top:"220px",
        gap: 5,
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* TEXT + BUTTON SECTION */}
      <Box
        sx={{
          maxWidth: "629px",
          textAlign: { xs: "center", md: "left" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Download our app and get the most out of it
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
          Get Muhiris: Your Gateway to a Vibrant Digital Ecosystem
        </Typography>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <img alt="getAppFrame"  src="/getAppFrame.png"/>

       
        </Box>
      </Box>

      {/* IMAGE SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/getApp.png"
          alt="Get App"
          style={{
            width: "100%",
            maxWidth: "420px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default GetApp;
