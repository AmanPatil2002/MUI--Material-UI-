import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

import { LocationOn, Phone, Email } from "@mui/icons-material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 6 }}>
      <div className="container">
        {/* Heading */}

        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={5}
        >
          We'd love to hear from you. Feel free to reach out anytime.
        </Typography>

        {/* Contact Info */}

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <Card elevation={4}>
              <CardContent className="text-center">
                <LocationOn sx={{ fontSize: 45, color: "#08B2E3" }} />
                <Typography variant="h6" mt={2}>
                  Address
                </Typography>

                <Typography color="text.secondary">
                  Lorem ipsum dolor sit amet.
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-4">
            <Card elevation={4}>
              <CardContent className="text-center">
                <Phone sx={{ fontSize: 45, color: "#08B2E3" }} />

                <Typography variant="h6" mt={2}>
                  Phone
                </Typography>

                <Typography color="text.secondary">+91 9876543210</Typography>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-4">
            <Card elevation={4}>
              <CardContent className="text-center">
                <Email sx={{ fontSize: 45, color: "#08B2E3" }} />

                <Typography variant="h6" mt={2}>
                  Email
                </Typography>

                <Typography color="text.secondary">
                  lorem@chilldrink.com
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Form + Map */}

        <div className="row g-4">
          {/* Form */}

          <div className="col-lg-7">
            <Paper elevation={4} sx={{ p: 4 }}>
              <Typography variant="h5" mb={3} fontWeight="bold">
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextField
                  label="Message"
                  name="message"
                  fullWidth
                  multiline
                  rows={5}
                  margin="normal"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    backgroundColor: "#08B2E3",
                    "&:hover": {
                      backgroundColor: "#08B1E3",
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </div>
          {/* Map */}

          <div className="col-lg-5">
            <Paper
              elevation={4}
              sx={{
                overflow: "hidden",
                height: "100%",
                minHeight: 500,
                borderRadius: 2,
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.817123456789!2d74.374107!3d16.407721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f3b7777c75cf%3A0x922f5572535ba3fe!2sChill%20%26%20Grill!5e0!3m2!1sen!2sin!4v1753770000000"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Contact;
