import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

import { Box, IconButton, Typography, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1f2937",
        color: "#fff",
        mt: 5,
      }}
    >
      <div className="container py-5">
        <div className="row g-4">
          {/* Company */}
          <div className="col-lg-4 col-md-6">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Chill Drinks
            </Typography>

            <Typography variant="body2" color="gray">
              Refreshing beverages made with premium ingredients. Bringing
              happiness in every sip.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/home" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>

            <div className="d-flex align-items-center mb-3">
              <LocationOn className="me-2" />
              <Typography variant="body2">Pune, Maharashtra, India</Typography>
            </div>

            <div className="d-flex align-items-center mb-3">
              <Phone className="me-2" />
              <Typography variant="body2">+91 98765 43210</Typography>
            </div>

            <div className="d-flex align-items-center">
              <Email className="me-2" />
              <Typography variant="body2">info@chilldrinks.com</Typography>
            </div>
          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>

            <IconButton color="inherit">
              <Facebook />
            </IconButton>

            <IconButton color="inherit">
              <Instagram />
            </IconButton>

            <IconButton color="inherit">
              <Twitter />
            </IconButton>

            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>

            <Typography variant="body2" color="gray" sx={{ mt: 2 }}>
              Stay connected with us on social media for the latest updates and
              offers.
            </Typography>
          </div>
        </div>

        <Divider
          sx={{
            backgroundColor: "#555",
            my: 4,
          }}
        />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <Typography variant="body2">
              © {new Date().getFullYear()} Chill Drinks. All Rights Reserved.
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
