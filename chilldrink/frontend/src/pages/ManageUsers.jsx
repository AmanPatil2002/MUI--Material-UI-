import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";


export default function ManageUser() {
  const user = [
    {
      id: 1,
      username: "Aman",
      email: "aman08@gmail.com",
      password: "aman08",
      active: "Active",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <h2 style={{ textAlign: "center", paddingTop: 10 }}>Manage User</h2>
      <Table sx={{ minWidth: 150 ,margin:10}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: "5%" }}>
              ID
            </TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>
              Username
            </TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>
              Password
            </TableCell>
            <TableCell align="center">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((items) => (
            <TableRow
              key={items.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {items.id}
              </TableCell>
              <TableCell align="center">{items.username}</TableCell>
              <TableCell align="center">{items.email}</TableCell>
              <TableCell align="center">{items.password}</TableCell>
              <TableCell align="center">
                <Chip sx={{backgroundColor:'red',fontSize:'20',color:'white'}} avatar={<Avatar sx={{backgroundColor:'white'}}>A</Avatar>} label={items.active} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
