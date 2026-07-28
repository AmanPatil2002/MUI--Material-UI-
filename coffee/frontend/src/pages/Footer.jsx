
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Link,
  Divider,

} from "@mui/material";
import { styled } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const StyledFooter = styled("footer")(({ theme }) => ({
  background: "linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #5D4037 100%)",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)",
    pointerEvents: "none",
  },
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: 30,
    color: "#fff",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D7CCC8",
    },
    "& input": {
      padding: "12px 20px",
    },
    "& input::placeholder": {
      color: "rgba(255,255,255,0.7)",
      opacity: 1,
    },
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#6F4E37",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  },
}));

const QuickLink = styled(Link)(({ theme }) => ({
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,
  transition: "all 0.3s ease",
  padding: "4px 0",
  "&:hover": {
    color: "#D7CCC8",
    transform: "translateX(5px)",
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  color: "#D7CCC8",
  fontWeight: 700,
  marginBottom: 20,
  position: "relative",
  paddingBottom: 12,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 40,
    height: 3,
    background: "linear-gradient(90deg, #6F4E37, #D7CCC8)",
    borderRadius: 2,
  },
}));

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Order Online", href: "/order" },
    { name: "Reservations", href: "/reservations" },
  ];


  const contactInfo = [
    { icon: <LocationOnIcon />, text: "123 Coffee Street, Brew District, NY 10001" },
    { icon: <PhoneIcon />, text: "+1 (555) 123-4567" },
    { icon: <EmailIcon />, text: "hello@brewmaster.com" },
    { icon: <AccessTimeIcon />, text: "Mon-Fri: 7AM - 10PM | Weekends: 8AM - 11PM" },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <YouTubeIcon />, href: "#", label: "YouTube" },
  ];

  return (
    <StyledFooter>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {/* Brand & About Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <LocalCafeIcon sx={{ fontSize: 35, color: "#D7CCC8" }} />
                  <Typography variant="h5" fontWeight={700} color="#fff">
                    BrewMaster
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, mb: 3 }}>
                  BrewMaster is your comprehensive cafe management solution. Streamline
                  operations, delight customers, and grow your coffee business with our
                  powerful platform.
                </Typography>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <SocialIconButton
                    key={index}
                    size="small"
                    href={social.href}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialIconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <FooterHeading variant="h6">Quick Links</FooterHeading>
              <Box component="nav">
                {quickLinks.map((link, index) => (
                  <QuickLink key={index} href={link.href}>
                    {link.name}
                  </QuickLink>
                ))}
              </Box>
            </Grid>

            {/* Contact Info & Newsletter */}
            <Grid item xs={12} md={4}>
              <FooterHeading variant="h6">Contact & Newsletter</FooterHeading>
              
              {/* Contact Details */}
              <Box sx={{ mb: 3 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      mb: 1.5,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <Box sx={{ color: "#D7CCC8", mt: 0.3 }}>{info.icon}</Box>
                    <Typography variant="body2">{info.text}</Typography>
                  </Box>
                ))}
              </Box>
              
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              © {new Date().getFullYear()} BrewMaster. All rights reserved.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link
              href="/privacy"
              sx={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#D7CCC8" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#D7CCC8" },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              sx={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#D7CCC8" },
              }}
            >
              Cookie Policy
            </Link>
          </Box>

          {/* Scroll to Top Button */}
          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: "#6F4E37",
              color: "#fff",
              "&:hover": {
                bgcolor: "#8D6E63",
                transform: "translateY(-3px)",
              },
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Container>
    </StyledFooter>
  );
}