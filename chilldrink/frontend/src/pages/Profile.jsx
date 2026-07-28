import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ProfileCard from "../components/ProfileCard"

export default function Profile() {
  return (
    <>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ mt: 1, mb: 2 }}>
        {/* Cover */}
        <Box
          sx={{
            height: 260,
            borderRadius: 4,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {/* Avatar */}
          <Avatar
            src="../assets/avatar.png"
            sx={{
              width: 160,
              height: 160,
              position: "absolute",
              bottom: -70,
              left: 50,
              border: "5px solid white",
            }}
          />
        </Box>

        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Name
            </Typography>

            <Typography color="text.secondary">Email</Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 650,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio est praesentium vitae voluptatibus nemo accusantium.
              Sequi saepe cum a laborum.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Follow</Button>
            <Button variant="outlined">Message</Button>
          </Stack>
        </Box>

        {/* Stats */}
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Grid container spacing={3} textAlign="center">
              <Grid item xs={4}>
                <Typography variant="h5" fontWeight="bold">254</Typography>
                <Typography color="text.secondary">Posts</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h5" fontWeight="bold">
                  18.2K
                </Typography>

                <Typography color="text.secondary">Followers</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h5" fontWeight="bold">
                  510
                </Typography>

                <Typography color="text.secondary">Following</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box sx={{
            mt: 10,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}>
            <ProfileCard/>
        </Box>
      </Container>
    </>
  );
}
