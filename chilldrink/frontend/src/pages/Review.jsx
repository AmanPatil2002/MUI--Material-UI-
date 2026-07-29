import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E5E5E5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const review = [
{ message: "Absolutely love this Coca Cola with Friench Fries." },
{ message: "Authentic Place for Drinks & Celebration with sufficiant space." },
{ message: "Ingredients used in the making of drinks are all natural and fresh."},
{ message: "They have a variety of drinks and tropical fruit juices." },
{ message: "Fast Service with Good management team."},
{ message: "Cozy Environment + Professional Staff Member's."},
{ message: "."},
{ message: "."},
{ message: "."},
];

export default function Review() {
  return (
    <Box sx={{ width: "100%", typography: "body1", paddingTop: 2 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        Review 
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {review.map((card, index) => (
            <Grid size={4} key={index}>
              <Item sx={{padding:5,height:170}}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "center",fontStyle:'italic',color:'#279AF1'}}
                >
                  "{card.message}"
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}