import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "../../../components/Navigation/Sidebar";
import Header from "../../../components/Navigation/Header";
import DashboardItems from "./DashboardItems";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MiniDrawer = () => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenSidebar(true);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        styled={styled}
        drawerWidth={drawerWidth}
        openSidebar={openSidebar}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar
        theme={theme}
        styled={styled}
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        openSidebar={openSidebar}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#edf0f340" }}
      >
        <DrawerHeader />
        <DashboardItems />
      </Box>
    </Box>
  );
};

export default MiniDrawer;
