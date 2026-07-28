import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: "Coca-Cola",
    description: "A refreshing classic cola with a rich and fizzy taste.",
    BG:"#F42C04"
  },
  {
    id: 2,
    title: "Pepsi",
    description: "A smooth and refreshing cola loved around the world.",
    BG:"#3F8EFC"
  },
  {
    id: 3,
    title: "Sprite",
    description: "A crisp lemon-lime soft drink with a refreshing flavor.",
    BG:"#00A676"
  },
  {
    id: 4,
    title: "Fanta",
    description: "A fruity orange-flavored soda bursting with sweetness.",
    BG:"#FFB100"
  },
  {
    id: 5,
    title: "Mountain Dew",
    description: "A citrus-flavored soft drink with a bold, energizing taste.",
    BG:"#85FFC7"
  },
  {
    id: 6,
    title: "Mirinda",
    description: "A vibrant orange soft drink with a fruity flavor.",
    BG:"#FF8552"
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div style={{padding:50, backgroundColor:'#87BFFF'}}>
        <h2 style={{textAlign:'center'}}>Select Cold Drink</h2>
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }} style={{justifyContent:'center'}}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: card.BG,
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%',color: 'text.secondary', textAlign:'center' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </div>
  );
}

export default SelectActionCard;
