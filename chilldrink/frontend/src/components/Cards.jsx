import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

export default function Cards() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            centered
            aria-label="lab API tabs example"
          >
            <Tab label="Coca cola" value="1" />
            <Tab label="Pepsi" value="2" />
            <Tab label="Sprite" value="3" />
            <Tab label="Other" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container spacing={5} style={{ marginLeft: 150 }}>
            {show.slice(0, 6).map((items) => (
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
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      ><p>
                        {items.desc || "No description available"}
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={5} style={{ marginLeft: 150 }}>
            {show.slice(6, 10).map((items) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                <Card sx={{ maxWidth: 345, height: "100%" }}  className="my-button">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={items.image}
                      alt={items.pname}
                      sx={{
                        height: 300,
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
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      ><p>
                        {items.desc || "No description available"}
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid container spacing={5} style={{ marginLeft: 150 }}>
            {show.slice(10, 13).map((items) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                <Card sx={{ maxWidth: 345, height: "100%" }} className="my-card">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={items.image}
                      alt={items.pname}
                      sx={{
                        height: 300,
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
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {items.desc || "No description available"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="4">
          <Grid container spacing={5} style={{ marginLeft: 150 }}>
            {show.slice(13, 20).map((items) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                <Card sx={{ maxWidth: 345, height: "100%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={items.image}
                      alt={items.pname}
                      sx={{
                        height: 300,
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
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {items.desc || "No description available"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
