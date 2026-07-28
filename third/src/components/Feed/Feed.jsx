import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { faker } from "@faker-js/faker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const posts = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
  date: faker.helpers.arrayElement([
    "Just now",
    "5 min",
    "30 min",
    "2 hrs",
    "Yesterday",
    "2 days",
  ]),
  image: faker.image.urlPicsumPhotos({
    width: 700,
    height: 500,
  }),
  caption: faker.lorem.paragraph(),
  likes: faker.number.int({ min: 100, max: 50000 }),
  shares: faker.number.int({ min: 0, max: 1000 }),
}));

export default function Feed() {
  return (
    <Box
      flex={4}
      p={2}
      sx={{
        width: "58%",
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      {/* Create Post */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 3,
          p: 2,
          boxShadow: 2,
        }}
      >
        {/* Top Row */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={faker.image.avatar()} />

          <TextField
            fullWidth
            placeholder="What's on your mind?"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                backgroundColor: "#f0f2f5",
              },
            }}
          />
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Bottom Row */}
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button
            startIcon={<VideoCallIcon color="error" />}
            color="inherit"
            fullWidth
          >
            Live Video
          </Button>

          <Button
            startIcon={<PhotoLibraryIcon color="success" />}
            color="inherit"
            fullWidth
          >
            Photo/Video
          </Button>

          <Button
            startIcon={<EmojiEmotionsIcon color="warning" />}
            color="inherit"
            fullWidth
          >
            Feeling
          </Button>
        </Stack>
      </Card>
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardHeader
            avatar={<Avatar src={post.avatar} sx={{ width: 45, height: 45 }} />}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography fontWeight="bold">{post.name}</Typography>}
            subheader={
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography variant="caption">{post.date}</Typography>
                <PublicIcon sx={{ fontSize: 14 }} />
              </Stack>
            }
          />

          <CardMedia
            component="img"
            image={post.image}
            sx={{
              maxHeight: 550,
              objectFit: "cover",
            }}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.caption}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              py: 1,
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <FavoriteIcon color="error" fontSize="small" />
              <Typography variant="body2">
                {post.likes.toLocaleString()}
              </Typography>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              {post.shares} Shares
            </Typography>
          </Box>

          <Divider />

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <IconButton>
              <ThumbUpAltIcon />
              <Typography sx={{ ml: 1 }}>Like</Typography>
            </IconButton>

            <IconButton>
              <ChatIcon />
              <Typography sx={{ ml: 1 }}>Comment</Typography>
            </IconButton>

            <IconButton>
              <SendIcon />
              <Typography sx={{ ml: 1 }}>Share</Typography>
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
