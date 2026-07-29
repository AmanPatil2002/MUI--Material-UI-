import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

export default function Products() {
  const [show, setShow] = useState([]);
  const showProduct = async () => {
    try {
      const res = await axios.get(`${API_URL}/product`);
      console.log("API Response:", res.data);
      setShow(res.data);
    } catch (err) {
      console.log("Error details:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    showProduct();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1", paddingTop: 2 }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Products
      </Typography>
      <Grid
        container
        spacing={5}
        sx={{
          ml: "90px",
          height: "150vh",
          overflowY: "scroll",
          overflowX: "hidden",
          p: 10,
        }}
      >
        {show.map((items) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
            <Card sx={{ maxWidth: 345, height: "100%" }} className="my-button">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={items.image}
                  alt={items.pname}
                  sx={{
                    height: 350,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    {items.pname}
                  </Typography>
                  <hr />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <p>{items.desc || "No description available"}</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
