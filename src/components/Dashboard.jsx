import { useState } from "react";
import {
  Checkbox,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
} from "@mui/material";
import ClientList from "./Client";

const drawerWidth = 240;

export default function Dashboard() {
  const [selected, setSelected] = useState("Inicio");

  const sections = ["Inicio", "Estadísticas", "Usuarios", "Configuración"];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard de Admin
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {sections.map((text) => (
            <ListItem
              component="button"
              key={text}
              selected={selected === text}
              onClick={() => setSelected(text)}
              sx={{ textAlign: "left" }} 
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          {selected}
        </Typography>

        <Box>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <ClientList />
        </Box>
      </Box>
    </Box>
  );
}
