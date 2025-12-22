import { Box, Button, Stack, Typography } from "@mui/material";
import { Apple, Android } from "@mui/icons-material";

const Buttons = () => {

  return (
    <Stack

      direction={{ xs: "column", sm: "row" }}
      gap={5}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {/* Google Play */}
      <Button
        component="a"
        href="https://play.google.com/store/apps/details?id=com.hussein.majid.trading&hl=ar"
        target="_blank"
        startIcon={<Android color="success" />}
        sx={{
          px: 3,
          py: 1.5,
          borderRadius: 2,
          backgroundColor: "#000",
          color: "#fff",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1a1a1a",
          },
        }}
      >
        <Box textAlign="left">
        
          <Typography variant="subtitle1" fontWeight="bold">
            Google Play
          </Typography>
        </Box>
      </Button>

      {/* App Store */}
      <Button
        component="a"
        href="https://apps.apple.com/iq/app/alwessam-express/id6741037368"
        target="_blank"
        startIcon={<Apple color="info" />}
        sx={{
          px: 3,
          py: 1.5,
          borderRadius: 2,
          backgroundColor: "#000",
          color: "#fff",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1a1a1a",
          },
        }}
      >
        <Box textAlign="left">
        
          <Typography variant="subtitle1" fontWeight="bold">
            App Store
          </Typography>
        </Box>
      </Button>
    </Stack>
  );
};

export default Buttons;
