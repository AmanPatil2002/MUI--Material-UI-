import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from "@mui/material/Box";

const marks = [
  {
    avatar: "C",
    title: "Coca Cola",
    subheader: "September 14, 2016",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400",
    description:
      "Classic carbonated soft drink with a secret recipe since 1886. Perfect refreshment for any occasion.",
  },
  {
    avatar: "P",
    title: "Pepsi",
    subheader: "March 22, 2018",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400",
    description:
      "Refreshing cola beverage with a bold taste, enjoyed worldwide for its crisp and smooth flavor.",
  },
  {
    avatar: "S",
    title: "Sprite",
    subheader: "July 10, 2019",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0Oaq31sk1XIKW3eRQVZqs-iUgPpbNxmJb-YKuZXDqw&s",
    description:
      "Lemon-lime flavored soft drink offering a clean, crisp, and caffeine-free refreshment.",
  },
  {
    avatar: "F",
    title: "Burger with French Fries",
    subheader: "January 05, 2020",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400",
    description:
      "Spicy Burger with sizilling French Fries.",
  },
  {
    avatar: "M",
    title: "Lemon Juice",
    subheader: "August 18, 2017",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    description:
      "Citrus-flavored soft drink with a bold kick, loved by adventure seekers and gamers.",
  },
  {
    avatar: "L",
    title: "Limca",
    subheader: "June 15, 2018",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMI0eURogiaFv1-R_x1IPo1hw74sacQoo0mUQLWtHAw&s",
    description:
      "Refreshing lemon-lime beverage known for its tangy flavor and sparkling freshness.",
  },
  {
    avatar: "S",
    title: "Mango drink",
    subheader: "October 11, 2020",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
    description:
      "Premium mango drink with a smooth texture and irresistible tropical sweetness.",
  },
  {
    avatar: "P",
    title: "Monster",
    subheader: "November 19, 2021",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400",
    description:
      "Popular energy drink formulated to boost energy, focus, and performance.",
  },
  {
    avatar: "G",
    title: "Fanta",
    subheader: "September 03, 2018",
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400",
    description:
      "Refreshing orange soft drink with a light, bubbly, and caffeine-free taste.",
  },
  {
    avatar: "M",
    title: "Mirinda",
    subheader: "January 27, 2022",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0LTx-LZtOPzATwnpchp9QILTGoxj011E35_1Ru49V6NcQ9KeA5DhIZ8&s=10",
    description:
      "Orange-flavored soda packed with fruity sweetness and sparkling refreshment.",
  },
];

export default function Bookmark() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, padding: 2 }}>
      {marks.map((bookmark, index) => (
        <Card key={index} sx={{ width: 350, height: 380 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {bookmark.avatar}
              </Avatar>
            }
            title={bookmark.title}
            subheader={bookmark.subheader}
          />
          <CardMedia
            component="img"
            sx={{width:350, height:230}}
            image={bookmark.image}
            alt={bookmark.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {bookmark.description}
            </Typography>          
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}