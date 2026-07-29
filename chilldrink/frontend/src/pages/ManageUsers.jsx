import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

import image from "../assets/avatar.png"

export default function ManageUser() {
  const users = [
    {
      id: 1,
      username: "Aman",
      email: "aman08@gmail.com",
      password: "aman08",
      active: true,
    },
    {
      id: 2,
      username: "Priya",
      email: "priya12@gmail.com",
      password: "priya12",
      active: false,
    },
    {
      id: 3,
      username: "Rahul",
      email: "rahul23@gmail.com",
      password: "rahul23",
      active: true,
    },
    {
      id: 4,
      username: "Neha",
      email: "neha45@gmail.com",
      password: "neha45",
      active: false,
    },
    {
      id: 5,
      username: "Vikram",
      email: "vikram67@gmail.com",
      password: "vikram67",
      active: true,
    },
  ];

  const getInitials = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h2 style={{ textAlign: "center" }}>Manage User</h2>
      <TableContainer 
        component={Paper} 
        sx={{ 
          overflowX: 'auto',
          overflowY: 'hidden', // Hides vertical scrollbar
          maxHeight: 'none' // Ensures no vertical scroll
        }}
      >
        <Table 
          sx={{ 
            minWidth: 650, // Ensures horizontal scroll when needed
            whiteSpace: 'nowrap' // Prevents text wrapping
          }} 
          aria-label="user management table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "5%" }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Username
              </TableCell>
              <TableCell align="center" sx={{ width: "25%" }}>
                Email
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Password
              </TableCell>
              <TableCell align="center" sx={{ width: "15%" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.password}</TableCell>
                <TableCell align="center">
                  <Chip
                    avatar={
                      <Avatar sx={{ 
                        backgroundColor: user.active ? '#2E7D32' : '#C62828',
                        color: 'white',
                        width: 55,
                        height: 55,
                        fontSize: '12px'
                      }}>
                        {/* {user.active ? '✓' : '✗'} */}
                        <img src={image} />
                      </Avatar>
                    }
                    label={user.active ? "Active" : "Inactive"}
                    sx={{
                      backgroundColor: user.active ? '#4CAF50' : '#f44336',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      height:50,
                      width:150,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}