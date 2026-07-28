
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div>
        <Navbar />

      <Box sx={{ mt: 2 }}>
        
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Sidebar />
          
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  )
}
