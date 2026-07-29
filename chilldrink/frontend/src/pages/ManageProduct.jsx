import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function ManageProduct() {
  const [show, setShow] = useState([]);
  const showProduct = async () => {
    try {
      const res = await axios.get(`${API_URL}/product`);
      console.log("API Response:", res.data);
      setShow(res.data);
    } catch (err) {
      console.log("Error details:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    showProduct();
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" gutterBottom style={{ textAlign: "center", paddingTop: 10 }}>
       Manage Products
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: "5%" }}>
              <Typography variant="h5" gutterBottom>
                Id
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: "8%" }}>
              <Typography variant="h5" gutterBottom>
                Image
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>
              <Typography variant="h5" gutterBottom>
                Product Name
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: "8%" }}>
              <Typography variant="h5" gutterBottom>
                Price
              </Typography>
            </TableCell>
            <TableCell align="center" sx={{ width: "40%" }}>
              <Typography variant="h5" gutterBottom>
                Description
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {show.map((items) => (
            <TableRow
              key={items.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {items.id}
              </TableCell>
              <TableCell>
                <div>
                  <img src={items.image} height={60} width={150} />
                </div>
              </TableCell>
              <TableCell align="center">{items.pname}</TableCell>
              <TableCell align="center">Rs. {items.price}</TableCell>
              <TableCell>{items.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
