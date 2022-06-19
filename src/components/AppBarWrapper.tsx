import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { MenuList, MenuItem } from "../interfaces/Menu";
import { PROJECT_NAME } from "../constants/default_settings";
import { initializeAxios } from "../utils/requests";

const menuList: MenuList = {
  items: [
    {
      table: "dashboard",
      link: "",
      icon: <DashboardIcon />,
    },
  ],
};

function AppBarWrapper() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    initializeAxios();
  }, []);

  function handleDrawerOpen(): void {
    setOpen(true);
  }

  function handleDrawerClose(): void {
    setOpen(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
            data-testid="menu-button"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            data-testid="project-name"
          >
            {PROJECT_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            {menuList.items.map((item: MenuItem, key) => (
              <ListItem button key={key}>
                {<ListItemIcon>{item.icon}</ListItemIcon>}
                <Button size="small" color="primary" href={`/${item.link}`}>
                  {item.table}
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Box>
  );
}

export default AppBarWrapper;
