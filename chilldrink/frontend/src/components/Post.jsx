import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    title: "Mango Smoothie",
    author: "@drinkgallery",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e",
    title: "Strawberry Milkshake",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
    title: "Iced Coffee",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    title: "Lemon Mojito",
    author: "@drinkgallery",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Orange Juice",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    title: "Chocolate Shake",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05",
    title: "Cold Coffee",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    title: "Cappuccino",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    title: "Watermelon Juice",
    author: "@drinkgallery",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    title: "Pineapple Juice",
    author: "@drinkgallery",
  },
  {
    img: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
    title: "Berry Mocktail",
    author: "@drinkgallery",
  },
];

export default function Post() {
  return (
    <>
      <ImageList
        sx={{
          width: 1110,
          height: 550,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 3 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 550, 250, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </>
  );
}
