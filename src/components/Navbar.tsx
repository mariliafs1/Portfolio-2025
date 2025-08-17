import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
        <Button color="inherit" onClick={()=> navigate('/about')}>About</Button>
        <Button color="inherit" onClick={()=> navigate('/contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}