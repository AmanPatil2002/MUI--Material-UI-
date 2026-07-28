import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/group";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HelpIcon from "@mui/icons-material/help";
import WorkIcon from "@mui/icons-material/work";
import EventIcon from "@mui/icons-material/event";
import SchoolIcon from "@mui/icons-material/school";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { faker } from "@faker-js/faker";
import Avatar from "@mui/material/Avatar";

export default function Sidebar() {
  const users = Array.from({ length: 8 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  }));

  return (
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none", 
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlayCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Questions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <Button variant="outlined" size="medium" color="grey">
              Show More
            </Button>
          </ListItem>
        </List>
        <Divider />
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemIcon>
                <Avatar alt={user.name} src={user.avatar} />
              </ListItemIcon>
              <br />
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      </Box>
  );
}
