import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Chip,
  Fade,
  Slide,
  Grow,
  Zoom,
} from "@mui/material";

import { styled, alpha, keyframes } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ReceiptIcon from "@mui/icons-material/Receipt";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useNavigate } from "react-router-dom";

// Keyframe animations
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(111, 78, 55, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(111, 78, 55, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(111, 78, 55, 0);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 40,
  background: "rgba(255,255,255,.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(0,0,0,.08)",
  width: 350,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    boxShadow: "0 8px 25px rgba(0,0,0,.08)",
    transform: "translateY(-1px)",
  },
  "&:focus-within": {
    boxShadow: "0 8px 25px rgba(111,78,55,.15)",
    border: "1px solid #6F4E37",
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")({
  position: "absolute",
  left: 18,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
});

const StyledInputBase = styled(InputBase)({
  width: "100%",
  paddingLeft: 55,
  paddingTop: 10,
  paddingBottom: 10,
});

// Styled Drawer components
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 320,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    boxShadow: "8px 0 40px rgba(0,0,0,0.12)",
    background: "linear-gradient(180deg, #F5F0EB 0%, #FFF8F0 100%)",
    backdropFilter: "blur(20px)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important",
    overflow: "hidden",
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #5D4037 100%)",
  color: "#fff",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
    backgroundSize: "200% 100%",
    animation: `${shimmer} 3s infinite`,
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 12,
  marginBottom: 4,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "3px",
    background: "linear-gradient(180deg, #6F4E37, #D7CCC8)",
    transform: "scaleY(0)",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "0 3px 3px 0",
  },
  "&:hover": {
    backgroundColor: "rgba(111,78,55,0.08)",
    transform: "translateX(8px)",
    "&::before": {
      transform: "scaleY(1)",
    },
    "& .MuiListItemIcon-root": {
      transform: "scale(1.1) rotate(-5deg)",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(111,78,55,0.12)",
    "&::before": {
      transform: "scaleY(1)",
    },
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  height: 20,
  fontSize: "0.65rem",
  fontWeight: 700,
  animation: `${pulseAnimation} 2s infinite`,
  "& .MuiChip-label": {
    padding: "0 8px",
  },
}));

// Navigation items configuration
const navigationItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    title: "Menu Management",
    icon: <MenuBookIcon />,
    path: "/menu",
    children: [
      { title: "All Items", path: "/menu/all", icon: <MenuBookIcon /> },
      { title: "Categories", path: "/menu/categories", icon: <MenuBookIcon /> },
      { title: "Specials", path: "/menu/specials", icon: <StarIcon /> },
    ],
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    path: "/orders",
  },
  {
    title: "Employee",
    icon: <PeopleIcon />,
    path: "/employee",
  },
  {
    title: "Customers",
    icon: <PeopleIcon />,
    path: "/customers",
  },
  {
    title: "Reports & Analytics",
    icon: <AnalyticsIcon />,
    path: "/reports",
    children: [
      { title: "Sales Report", path: "/reports/sales", icon: <ReceiptIcon /> },
      { title: "Analytics", path: "/reports/analytics", icon: <AnalyticsIcon /> },
    ],
  },
];

const bottomNavItems = [
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [lightMode, setLightMode] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const menuOpen = Boolean(anchorEl);
  const mobileOpen = Boolean(mobileAnchor);

  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileAnchor(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleExpandClick = (title) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleNavigation = (path) => {
    // Close drawer with delay for smooth animation
    setDrawerOpen(false);
    setTimeout(() => {
      navigate(path);
      setExpandedItems({});
    }, 300);
  };

  const NavigationDrawer = () => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      role="navigation"
    >
      {/* Drawer Header */}
      <DrawerHeader>
        <Zoom in={drawerOpen} timeout={500}>
          <Avatar
            sx={{
              bgcolor: "#6F4E37",
              marginTop:7,
              width: 65,
              height: 65,
              mx: "auto",
              mb: 2,
              border: "3px solid #D7CCC8",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05) rotate(5deg)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <LocalCafeIcon sx={{ fontSize: 35 }} />
          </Avatar>
        </Zoom>
        <Fade in={drawerOpen} timeout={600}>
          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: 0.5 }}>
              BrewMaster
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.7rem",
                letterSpacing: 1,
              }}
            >
              CAFE MANAGEMENT SYSTEM
            </Typography>
          </Box>
        </Fade>
      </DrawerHeader>

      <Divider />

      {/* Navigation Items */}
      <List sx={{ flex: 1, px: 2, pt: 2, overflowY: "auto" }}>
        {navigationItems.map((item, index) => (
          <Grow
            in={drawerOpen}
            key={item.title}
            timeout={400 + index * 100}
            style={{ transformOrigin: "0 0 0" }}
          >
            <Box>
              <ListItem disablePadding>
                <StyledListItemButton
                  onClick={() =>
                    item.children
                      ? handleExpandClick(item.title)
                      : handleNavigation(item.path)
                  }
                >
                  <ListItemIcon
                    sx={{
                      color: "#6F4E37",
                      minWidth: 40,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      sx: {
                        transition: "all 0.3s ease",
                      },
                    }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {item.badge && (
                      <StyledChip
                        label={item.badge.text}
                        size="small"
                        color={item.badge.color}
                      />
                    )}
                    {item.children ? (
                      expandedItems[item.title] ? (
                        <ExpandLess
                          sx={{
                            transition: "all 0.3s ease",
                            color: "#6F4E37",
                          }}
                        />
                      ) : (
                        <ExpandMore
                          sx={{
                            transition: "all 0.3s ease",
                            color: "#6F4E37",
                          }}
                        />
                      )
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          opacity: 0,
                          transition: "all 0.3s ease",
                          transform: "translateX(-10px)",
                          ".MuiListItemButton-root:hover &": {
                            opacity: 1,
                            transform: "translateX(0)",
                          },
                        }}
                      />
                    )}
                  </Box>
                </StyledListItemButton>
              </ListItem>

              {/* Sub-items with smooth collapse */}
              {item.children && (
                <Collapse
                  in={expandedItems[item.title]}
                  timeout={400}
                  unmountOnExit
                  sx={{
                    "& .MuiCollapse-wrapperInner": {
                      animation: `${fadeInUp} 0.4s ease`,
                    },
                  }}
                >
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <Slide
                        key={child.title}
                        direction="right"
                        in={expandedItems[item.title]}
                        timeout={300 + childIndex * 100}
                      >
                        <ListItem disablePadding>
                          <StyledListItemButton
                            onClick={() => handleNavigation(child.path)}
                            sx={{ pl: 6 }}
                          >
                            <ListItemIcon
                              sx={{
                                color: "#8D6E63",
                                minWidth: 35,
                                transition: "all 0.3s ease",
                              }}
                            >
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={child.title}
                              primaryTypographyProps={{
                                fontSize: "0.85rem",
                                fontWeight: 500,
                              }}
                            />
                          </StyledListItemButton>
                        </ListItem>
                      </Slide>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          </Grow>
        ))}
      </List>

      <Divider sx={{ mt: "auto" }} />

      {/* Bottom Navigation */}
      <Box sx={{ backgroundColor: "rgba(111,78,55,0.03)" }}>
        <List sx={{ px: 2, py: 1 }}>
          {bottomNavItems.map((item, index) => (
            <Grow
              in={drawerOpen}
              key={item.title}
              timeout={800 + index * 100}
            >
              <ListItem disablePadding>
                <StyledListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(111,78,55,0.06)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#6F4E37",
                      minWidth: 40,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  />
                </StyledListItemButton>
              </ListItem>
            </Grow>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          color: "#2D2D2D",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 32px rgba(31,38,135,0.08)",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          zIndex: 1201,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: 75,
            px: { xs: 2, sm: 3 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Left Section - Menu Icon & Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{
                bgcolor: "rgba(255,255,255,.6)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  bgcolor: "#6F4E37",
                  color: "#fff",
                  transform: "translateY(-2px) rotate(90deg)",
                  boxShadow: "0 4px 15px rgba(111,78,55,0.3)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                sx={{
                  bgcolor: "#6F4E37",
                  width: { xs: 35, sm: 45 },
                  height: { xs: 35, sm: 45 },
                  
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <LocalCafeIcon />
              </Avatar>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#4E342E"
                  lineHeight={1.2}
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#3E2723",
                    },
                  }}
                >
                  BrewMaster
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Cafe Management
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Center Section - Search */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search orders, menu..." />
            </Search>
          </Box>

          {/* Right Section - Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1 } }}>
           

            {/* Profile Avatar - Always visible */}
            <IconButton
              onClick={handleProfileOpen}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#6F4E37",
                  width: { xs: 32, sm: 40 },
                  height: { xs: 32, sm: 40 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(111,78,55,0.4)",
                  },
                }}
              >
                A
              </Avatar>
            </IconButton>

            {/* Mobile Menu - Only on mobile */}
            <IconButton
              onClick={(e) => setMobileAnchor(e.currentTarget)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "rotate(90deg)",
                },
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer with professional animations */}
      <StyledDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        transitionDuration={400}
        SlideProps={{
          timeout: 400,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <NavigationDrawer />
      </StyledDrawer>

      {/* Desktop Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={300}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.95)",
            overflow: "visible",
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => handleNavigation("/profile")}
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(111,78,55,0.08)",
              paddingLeft: 3,
            },
          }}
        >
          My Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(111,78,55,0.08)",
              paddingLeft: 3,
            },
          }}
        >
          Settings
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem
          onClick={handleClose}
          sx={{
            transition: "all 0.2s ease",
            color: "error.main",
            "&:hover": {
              backgroundColor: "rgba(211,47,47,0.08)",
              paddingLeft: 3,
            },
          }}
        >
          Logout
        </MenuItem>
      </Menu>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileAnchor}
        open={mobileOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={300}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            minWidth: 200,
          },
        }}
      >
        <MenuItem
          onClick={() => handleNavigation("/profile")}
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(111,78,55,0.08)",
              paddingLeft: 3,
            },
          }}
        >
          <AccountCircle sx={{ mr: 1 }} />
          Profile
        </MenuItem>
      </Menu>
    </>
  );
}