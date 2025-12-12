import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Navbar = () => {
  
const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:1000px)");
  const context = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);

  if (!context)
    throw new Error("LanguageContext must be used within a LanguageProvider");

  const { language, toggleLanguage } = context;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", width: 250 }}>
      <List>
        {routes.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText>
              <NavLink
                to={item.title}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "block",
                  padding: "10px 0",
                }}
              >
                {t(item.title)}
              </NavLink>
            </ListItemText>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button variant="contained" sx={{ margin: "10px 0", width: "100%" }}>
            {t("Get Started")}
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            variant="outlined"
            sx={{ margin: "10px 0", width: "100%" }}
            onClick={toggleLanguage}
          >
            {language === "en" ? "AR" : "EN"}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
     <AppBar
      position="fixed"
      elevation={0}
      sx={{
        
        transition: "0.3s ease",
        backgroundColor: isScrolled ? "rgba(255,255,255,0.7)" : "#fff",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid #E5E7EB" : "none",
        boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", px: { xs: 2, sm: 10 }, py: 2 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/Logo.png" alt="logo" style={{ width: 180, height: 50 }} />
        </Box>

        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon color="#157EFD" />
          </IconButton>
        )}

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {routes.map((item) => (
              <NavLink
                key={item.id}
                to={item.title}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t(item.title)}
              </NavLink>
            ))}
          </Box>
        )}

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "black" }}
            >
              {t("Login")}
            </NavLink>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6334FC",
                textTransform: "none",
                borderRadius: "50px",
                width: 142,
                padding: "10px 30px",
                fontSize: 14,
                "&:hover": { backgroundColor: "#552be3" },
              }}
            >
              {t("Get Started")}
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "50px",
                fontSize: 14,
                padding: "10px 20px",
              }}
              onClick={toggleLanguage}
            >
              {language === "en" ? "AR" : "EN"}
            </Button>
          </Box>
        )}

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              width: 300,
              alignItems: "center",
              backgroundColor: "#ffffffcc",
              backdropFilter: "blur(5px)",
            },
          }}
          ModalProps={{
            sx: {
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
