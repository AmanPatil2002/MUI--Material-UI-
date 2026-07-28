import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image from '../assets/fruits.jpg'

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cherry
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem earum voluptatem?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
