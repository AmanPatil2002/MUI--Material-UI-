import { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";

import { styled, keyframes } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/Pending";

const drawerWidth = 250;

// Animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const StyledCard = styled(Card)(({ bgcolor }) => ({
  borderRadius: 20,
  background: `linear-gradient(135deg, ${bgcolor}15 0%, ${bgcolor}05 100%)`,
  backdropFilter: "blur(10px)",
  border: `1px solid ${bgcolor}20`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: bgcolor,
    borderRadius: "4px 4px 0 0",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px ${bgcolor}20`,
  },
}));

const StyledPaper = styled(Paper)({
  borderRadius: 20,
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.3)",
  boxShadow: "0 8px 32px rgba(31,38,135,0.08)",
  transition: "all 0.3s ease",
  height: "100%",
  "&:hover": {
    boxShadow: "0 12px 40px rgba(31,38,135,0.12)",
    transform: "translateY(-2px)",
  },
});

const ChartBar = styled(Box)(({ height, color }) => ({
  width: 40,
  height: height,
  background: `linear-gradient(180deg, ${color} 0%, ${color}80 100%)`,
  borderRadius: "8px 8px 0 0",
  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    transform: "scaleY(1.1)",
    transformOrigin: "bottom",
    filter: "brightness(1.2)",
  },
}));

const stats = [
  {
    title: "Today's Revenue",
    value: "₹18,540",
    change: "+12.5%",
    trend: "up",
    icon: <CurrencyRupeeIcon sx={{ fontSize: 35 }} />,
    color: "#4CAF50",
    bgColor: "#4CAF50",
  },
  {
    title: "Total Orders",
    value: "248",
    change: "+8.2%",
    trend: "up",
    icon: <ShoppingCartIcon sx={{ fontSize: 35 }} />,
    color: "#FF9800",
    bgColor: "#FF9800",
  },
  {
    title: "Customers",
    value: "124",
    change: "+15.3%",
    trend: "up",
    icon: <PeopleIcon sx={{ fontSize: 35 }} />,
    color: "#2196F3",
    bgColor: "#2196F3",
  },
  {
    title: "Coffee Sold",
    value: "356",
    change: "-3.1%",
    trend: "down",
    icon: <CoffeeIcon sx={{ fontSize: 35 }} />,
    color: "#795548",
    bgColor: "#795548",
  },
];

const recentOrders = [
  {
    id: "#1001",
    customer: "Rahul Sharma",
    items: "Cappuccino x2",
    amount: "₹320",
    status: "completed",
    time: "5 min ago",
  },
  {
    id: "#1002",
    customer: "Sneha Patel",
    items: "Cold Coffee, Burger",
    amount: "₹520",
    status: "preparing",
    time: "12 min ago",
  },
  {
    id: "#1003",
    customer: "Amit Kumar",
    items: "Espresso, Croissant",
    amount: "₹180",
    status: "pending",
    time: "18 min ago",
  },
  {
    id: "#1004",
    customer: "Priya Singh",
    items: "Latte, Pizza Slice",
    amount: "₹420",
    status: "completed",
    time: "25 min ago",
  },
  {
    id: "#1005",
    customer: "Deepak Verma",
    items: "Mocha, Sandwich",
    amount: "₹350",
    status: "cancelled",
    time: "30 min ago",
  },
];

const popularItems = [
  { name: "Cappuccino", orders: 145, icon: "☕", trend: "+12%" },
  { name: "Cold Coffee", orders: 98, icon: "🥤", trend: "+8%" },
  { name: "Veg Burger", orders: 76, icon: "🍔", trend: "+5%" },
  { name: "Margherita Pizza", orders: 65, icon: "🍕", trend: "+15%" },
  { name: "Chocolate Cake", orders: 54, icon: "🍰", trend: "+3%" },
];

const lowStock = [
  { name: "Milk", stock: 15, total: 100, severity: "error" },
  { name: "Coffee Beans", stock: 25, total: 100, severity: "warning" },
  { name: "Chocolate Syrup", stock: 30, total: 100, severity: "warning" },
  { name: "Cheese", stock: 10, total: 100, severity: "error" },
  { name: "Bread", stock: 40, total: 100, severity: "info" },
];

const salesData = [
  { day: "Mon", value: 65, color: "#6F4E37" },
  { day: "Tue", value: 45, color: "#8D6E63" },
  { day: "Wed", value: 75, color: "#A1887F" },
  { day: "Thu", value: 55, color: "#BCAAA4" },
  { day: "Fri", value: 85, color: "#6F4E37" },
  { day: "Sat", value: 95, color: "#8D6E63" },
  { day: "Sun", value: 70, color: "#A1887F" },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "completed":
      return <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: 16 }} />;
    case "preparing":
      return <AccessTimeIcon sx={{ color: "#FF9800", fontSize: 16 }} />;
    case "pending":
      return <PendingIcon sx={{ color: "#2196F3", fontSize: 16 }} />;
    case "cancelled":
      return <CancelIcon sx={{ color: "#F44336", fontSize: 16 }} />;
    default:
      return null;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "success";
    case "preparing":
      return "warning";
    case "pending":
      return "info";
    case "cancelled":
      return "error";
    default:
      return "default";
  }
};

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#F8F5F2",
        minHeight: "100vh",
        paddingLeft: 10,
      }}
    >
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight={800}
              color="#3E2723"
              lineHeight={1.2}
            >
              Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Welcome back! Here's what's happening today.
            </Typography>
          </Box>
        </Box>

        {/* Stats Cards Section */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {stats.map((item) => (
            <Grid item xs={12} sm={6} lg={3} key={item.title}>
              <StyledCard bgcolor={item.bgColor}>
                <CardContent sx={{ p: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Box flex={1}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                        sx={{ mb: 1 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        fontWeight={800}
                        sx={{ mb: 1, lineHeight: 1.1 }}
                      >
                        {item.value}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          flexWrap: "wrap",
                        }}
                      >
                        {item.trend === "up" ? (
                          <ArrowUpwardIcon
                            sx={{ color: "#4CAF50", fontSize: 20 }}
                          />
                        ) : (
                          <ArrowDownwardIcon
                            sx={{ color: "#F44336", fontSize: 20 }}
                          />
                        )}
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          color={
                            item.trend === "up" ? "success.main" : "error.main"
                          }
                        >
                          {item.change}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          vs last week
                        </Typography>
                      </Box>
                    </Box>

                    <Avatar
                      sx={{
                        bgcolor: item.color,
                        width: 60,
                        height: 60,
                        boxShadow: `0 8px 20px ${item.color}40`,
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                        "&:hover": {
                          animation: `${pulse} 0.6s ease-in-out`,
                        },
                      }}
                    >
                      {item.icon}
                    </Avatar>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Charts & Order Status Section */}
        <Grid container spacing={3} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6} sx={{ width: 825 }}>
            <StyledPaper sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#3E2723"
                  lineHeight={1.3}
                >
                  Recent Orders
                </Typography>
                <Chip
                  label="View All"
                  size="small"
                  clickable
                  sx={{ borderRadius: 2, fontWeight: 600 }}
                />
              </Box>

              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: 700, color: "text.secondary" }}
                      >
                        Order ID
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "text.secondary" }}
                      >
                        Customer
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "text.secondary" }}
                      >
                        Amount
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: 700, color: "text.secondary" }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow
                        key={order.id}
                        sx={{
                          "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.02)",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        <TableCell>
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            color="primary"
                          >
                            {order.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                fontSize: 14,
                                bgcolor: "#6F4E37",
                                fontWeight: 600,
                              }}
                            >
                              {order.customer[0]}
                            </Avatar>
                            <Box>
                              <Typography variant="body2" fontWeight={500}>
                                {order.customer}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {order.time}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" fontWeight={600}>
                            {order.amount}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            icon={getStatusIcon(order.status)}
                            label={order.status}
                            size="small"
                            color={getStatusColor(order.status)}
                            sx={{
                              borderRadius: 2,
                              fontWeight: 600,
                              textTransform: "capitalize",
                              "& .MuiChip-icon": { ml: 0.5 },
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </StyledPaper>
          </Grid>
          {/* Sales Chart */}
          <Grid item xs={12} lg={8}>
            <StyledPaper sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#3E2723"
                    lineHeight={1.3}
                  >
                    Sales Analytics
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Weekly revenue overview
                  </Typography>
                </Box>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Box>

              {/* Bar Chart */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "flex-end",
                  height: 220,
                  pt: 2,
                  px: 1,
                }}
              >
                {salesData.map((data) => (
                  <Box key={data.day} sx={{ textAlign: "center" }}>
                    <Tooltip
                      title={`${data.day}: ₹${data.value * 100}`}
                      arrow
                      placement="top"
                    >
                      <ChartBar height={`${data.value}%`} color={data.color} />
                    </Tooltip>
                    <Typography
                      variant="caption"
                      mt={1}
                      display="block"
                      fontWeight={600}
                    >
                      {data.day}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Legend */}
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  mt: 3,
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: 3,
                      bgcolor: "#6F4E37",
                    }}
                  />
                  <Typography variant="caption" fontWeight={500}>
                    Revenue
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: 3,
                      bgcolor: "#A1887F",
                    }}
                  />
                  <Typography variant="caption" fontWeight={500}>
                    Orders
                  </Typography>
                </Box>
              </Box>
            </StyledPaper>
          </Grid>

          {/* Bottom Section */}
          <Grid container spacing={3} sx={{ mt: 5 ,mb:2}}>
            {/* Order Status */}
            <Grid item xs={12} lg={6} >
              <StyledPaper sx={{ p: 3 ,width:300, height:300}}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#3E2723"
                  mb={3}
                  lineHeight={1.3}
                  sx={{textAlign:'center'}}
                >
                  Order Status
                </Typography>

                <Stack spacing={2.5}>
                  {[
                    {
                      label: "Completed",
                      count: 160,
                      color: "#4CAF50",
                      progress: 64,
                    },
                    {
                      label: "Preparing",
                      count: 45,
                      color: "#FF9800",
                      progress: 18,
                    },
                    {
                      label: "Pending",
                      count: 28,
                      color: "#2196F3",
                      progress: 11,
                    },
                    {
                      label: "Cancelled",
                      count: 15,
                      color: "#F44336",
                      progress: 7,
                    },
                  ].map((status) => (
                    <Box key={status.label}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2" fontWeight={600}>
                          {status.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={700}
                          color={status.color}
                        >
                          {status.count}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={status.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: `${status.color}20`,
                          "& .MuiLinearProgress-bar": {
                            bgcolor: status.color,
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                <Box
                  sx={{ mt: 3, pt: 2, borderTop: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" fontWeight={600}>
                      Total Orders Today
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={800}
                      color="#3E2723"
                      lineHeight={1.2}
                    >
                      248
                    </Typography>
                  </Box>
                </Box>
              </StyledPaper>
            </Grid>

            {/* Popular Items */}
            <Grid item xs={12} md={6} lg={3}>
              <StyledPaper sx={{ p: 3 ,width:400, height:420}}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#3E2723"
                  mb={3}
                  lineHeight={1.3}
                   sx={{textAlign:'center'}}
                >
                  Popular Items
                </Typography>

                <Stack spacing={1.5}>
                  {popularItems.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1.5,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(111,78,55,0.05)",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 45,
                          height: 45,
                          bgcolor: "#F5F0EB",
                          fontSize: 20,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <Box flex={1} minWidth={0}>
                        <Typography variant="body2" fontWeight={600} noWrap>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.orders} orders
                        </Typography>
                      </Box>
                      <Chip
                        label={item.trend}
                        size="small"
                        color="success"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          flexShrink: 0,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </StyledPaper>
            </Grid>

            {/* Low Stock */}
            <Grid item xs={12} md={6} lg={3}>
              <StyledPaper sx={{ p: 3,width:300,height:350 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#3E2723"
                  mb={3}
                  lineHeight={1.3}
                   sx={{textAlign:'center'}}
                >
                  Low Stock Alert
                </Typography>

                <Stack spacing={2.5}>
                  {lowStock.map((item) => (
                    <Box key={item.name}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2" fontWeight={600}>
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={700}
                          color={
                            item.severity === "error"
                              ? "error.main"
                              : item.severity === "warning"
                                ? "warning.main"
                                : "info.main"
                          }
                        >
                          {item.stock} left
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={(item.stock / item.total) * 100}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          bgcolor: "rgba(0,0,0,0.05)",
                          "& .MuiLinearProgress-bar": {
                            bgcolor:
                              item.severity === "error"
                                ? "#F44336"
                                : item.severity === "warning"
                                  ? "#FF9800"
                                  : "#2196F3",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                <Box
                  sx={{ mt: 3, pt: 2, borderTop: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <Chip
                    icon={<LocalOfferIcon />}
                    label="Order More Stock"
                    color="error"
                    variant="outlined"
                    size="small"
                    clickable
                    sx={{
                      borderRadius: 2,
                      width: "100%",
                      fontWeight: 600,
                      justifyContent: "flex-start",
                      "& .MuiChip-icon": { ml: 0.5 },
                    }}
                  />
                </Box>
              </StyledPaper>
            </Grid>
          </Grid>         
        </Grid>
      </Box>
    </Box>
  );
}
