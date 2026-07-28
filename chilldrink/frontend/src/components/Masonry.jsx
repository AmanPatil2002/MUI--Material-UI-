import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';


export default function ImageMasonry() {
  return (
    <Box sx={{ width: '100%', minHeight: 529 ,padding:5}}>
        <h1 style={{textAlign:'center'}}>Gallery</h1>
        <hr/>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            {/* <Label>{index + 1}</Label> */}
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAy8PQmDyFg37FdF5xgB9B1Q6F0eEp8yqJRW1p7QiPHu-qyLw_-s_UQz3&s=10',
    title: 'Fern',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1725075086083-89117890371d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fHww',
    title: 'Snacks',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7drWBokMRFKkA9Y-uDsnQOdjDi3dfxdtxvPJXy5fa1d7DdaR3DJ_w8R56&s=10',
    title: 'Mushrooms',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4FA_CJsWJYB8jNytYyJnomVRbf5lfToOFiwPotIH6A&s=10',
    title: 'Tower',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgld4WYRD21xwoBjMsNJ8soULWqH0LDi4BIIBN9tiOXpglm2q6Q9MSmp-&s=10',
    title: 'Sea star',
  },
  {
    img: 'https://t4.ftcdn.net/jpg/09/97/90/53/360_F_997905395_1T9GEHdWzAwIgIPwd0Sl4Pg3heLS2F8Z.jpg',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMGRyaW5rfGVufDB8fDB8fHww',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1656936637945-571e3f0893f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjBkcmlua3xlbnwwfHwwfHx8Mg%3D%3D',
    title: 'Breakfast',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/058/088/266/small/refreshing-iced-beverages-with-fruit-photo.jpeg',
    title: 'Tree',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/soft-drinks-11566390.jpg',
    title: 'Burger',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSro2Hkc7-ePtL9Mp1TpO9VngQoyy-zSsk6pergamVFTWpXC37D-a9i_c14&s=10',
    title: 'Camera',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71iZfwMp3KL._AC_UF350,350_QL80_.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBUNiIuT6RaU0D4mwD1p7G9BuvQ9AWYgwEvbtw8_9Bk8fjwDcxBjiCHg&s=10',
    title: 'Camping Car',
  },
  {
    img: 'https://cdn.dotpe.in/longtail/store-items/5884343/sKvxbaDq.webp',
    title: 'Hats',
  },
  {
    img: 'https://m.media-amazon.com/images/I/513bMfajQMS.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eazqjX5hbetLIroCLmKptg-bxr8LAUJqca3g5EA6Mq6KVAFhUKhPZ7Q&s=10',
    title: 'Mountain',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61SISUGCDYL._AC_UF350,350_QL80_.jpg',
    title: 'Bike',
  },
];
