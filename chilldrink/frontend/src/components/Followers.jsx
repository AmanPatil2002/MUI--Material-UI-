import * as React from 'react';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const persons = [
  {
    avatar: "G",
    name: "Ganesh Patil",
    email: "Ganesh08@gmail.com",
  },
  {
    avatar: "P",
    name: "Pravin Patil",
    email: "Pravin55@gmail.com",
  },
  {
    avatar: "P",
    name: "Prasad More",
    email: "Prasad200@gmail.com",
  },
  {
    avatar: "O",
    name: "Omkar Patil",
    email: "omkar45@gmail.com",
  },
  {
    avatar: "A",
    name: "Akash Killadar",
    email: "Akash77@gmail.com",
  },
];

export default function Followers() {
  // Track expanded state for each card by index
  const [expandedCards, setExpandedCards] = React.useState({});

  const handleExpandClick = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      {persons.map((info, index) => (
        <Card key={index} sx={{ width: "100%", backgroundColor: "#e4e3e3", marginBottom: 1 }}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar sx={{ backgroundColor: "#626161" }}>
                  {info.avatar}
                </Avatar>
              }
              action={
                <ExpandMore
                  expand={expandedCards[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedCards[index]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              }
              title={info.name}
              subheader={info.email}
            />
            <CardContent>
              <Collapse in={expandedCards[index]} timeout="auto" unmountOnExit>
                <Box
                  component="form"
                  sx={{ display: "flex", paddingLeft: 5 }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "85%", marginRight: 2 }}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                  />
                  <Button
                    sx={{ width: 30, paddingLeft: 5, paddingRight: 5 }}
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </Box>
              </Collapse>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}