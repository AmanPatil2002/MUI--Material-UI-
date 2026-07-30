
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  LinearProgress,
  IconButton,
  Chip
} from '@mui/material';
import {
  LocalBar,
  MoreVert,
} from '@mui/icons-material';

export default function Dashboard() {

  const recentOrders = [
    { id: 1, customer: 'Pravin Patil', drink: 'Mango Smoothie', amount: '80', status: 'Completed' },
    { id: 2, customer: 'Rahul Verma', drink: 'Watermelon Juice', amount: '75', status: 'Processing' },
    { id: 3, customer: 'Neha Patel', drink: 'Coca Cola Drink', amount: '60', status: 'Pending' },
    { id: 4, customer: 'Vikram Shah', drink: 'Lime Juice', amount: '40', status: 'Completed' }
  ];

  const popularDrinks = [
    { name: 'Coca Cola Drink', sales: 95, percentage: 95 },
    { name: 'Orange Juice', sales: 75, percentage: 75 },
    { name: 'Mango Smoothie', sales: 85, percentage: 85 },
    { name: 'Watermelon Juice', sales: 35, percentage: 35 },
    
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your store today.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {/* Recent Orders */}
        <Grid item sx={{width:'40%'}}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Recent Orders
              </Typography>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </Box>
            <List>
              {recentOrders.map((order, index) => (
                <Box key={order.id}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#00BCD4' }}>
                        <LocalBar />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={order.customer}
                      secondary={order.drink}
                    />
                    <Box sx={{ textAlign: 'right', ml: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {order.amount}
                      </Typography>
                      <Chip
                        label={order.status}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          bgcolor: 
                            order.status === 'Completed' ? '#E8F5E9' : 
                            order.status === 'Processing' ? '#FFF3E0' : '#FFEBEE',
                          color:
                            order.status === 'Completed' ? '#2E7D32' : 
                            order.status === 'Processing' ? '#E65100' : '#C62828',
                        }}
                      />
                    </Box>
                  </ListItem>
                  {index < recentOrders.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Popular Drinks */}
        <Grid item sx={{width:'50%'}}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Popular Drinks
              </Typography>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </Box>
            {popularDrinks.map((drink, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">{drink.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {drink.sales} sales
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={drink.percentage}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    bgcolor: '#E0E0E0',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#00BCD4',
                      borderRadius: 5
                    }
                  }}
                />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}