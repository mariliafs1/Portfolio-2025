import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Button color="inherit" onClick={()=>Navigate}>Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}