
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import Post from "./Post";
import Bookmark from "./Bookmark";
import Followers from "./Followers";
//import Typography from "@mui/material/Typography";


export default function Cards() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            centered
            aria-label="lab API tabs example"
          >
            <Tab label="Post" value="1"/>
            <Tab label="Followers" value="2" />
            <Tab label="Bookmark" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container spacing={1} >
            <Grid >
                <Post/>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
         <Grid container spacing={1} >
            <Box sx={{width:'100%'}}>
                <Followers/>
            </Box>
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid container spacing={1} >
            <Grid >
                <Bookmark/>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
