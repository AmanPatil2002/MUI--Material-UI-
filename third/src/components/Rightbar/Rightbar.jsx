import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 300,
          top: 80,
          right: 16,
          height: "calc(100vh - 96px)",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {/* Online Friends */}
        <Typography variant="h6" fontWeight={600}>
          Online Friends
        </Typography>

        <AvatarGroup max={6} sx={{ mb: 3 }}>
          <Avatar alt="Aman" src="https://i.pravatar.cc/150?img=1" />
          <Avatar alt="John" src="https://i.pravatar.cc/150?img=2" />
          <Avatar alt="Sara" src="https://i.pravatar.cc/150?img=3" />
          <Avatar alt="Alex" src="https://i.pravatar.cc/150?img=4" />
          <Avatar alt="Emily" src="https://i.pravatar.cc/150?img=5" />
          <Avatar alt="David" src="https://i.pravatar.cc/150?img=6" />
        </AvatarGroup>

        {/* Latest Photos */}
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://picsum.photos/200?1" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?2" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?3" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?4" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?5" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?6" alt="" loading="lazy" />
          </ImageListItem>
        </ImageList>

        {/* Latest Conversations */}
        <Typography variant="h6" fontWeight={600} mt={3}>
          Latest Conversations
        </Typography>

        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://i.pravatar.cc/150?img=7" />
            </ListItemAvatar>
            <ListItemText
              primary="John Doe"
              secondary={
                <Typography variant="body2" color="text.secondary">
                  See you tomorrow!
                </Typography>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://i.pravatar.cc/150?img=8" />
            </ListItemAvatar>
            <ListItemText primary="Emily" secondary="Meeting at 5 PM." />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://i.pravatar.cc/150?img=9" />
            </ListItemAvatar>
            <ListItemText
              primary="Alex"
              secondary="Let's catch up this weekend."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
