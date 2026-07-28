import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Item></Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <Form>
                <h3>Enter Review</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <TextField id="outlined-basic" label="E-mail" variant="outlined" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <TextField id="outlined-basic" label="Description" variant="outlined" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
