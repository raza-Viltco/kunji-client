import React, { useState, useEffect } from "react";
import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  MdDashboard,
  MdAddBusiness,
  MdOutlineFormatListBulleted,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { logout } from "../../redux/actions/Auth/user";
import "./sidebar.css";
import { shouldForwardProp } from "@mui/styled-engine";

const Sidebar = ({
  styled,
  theme,
  drawerWidth,
  handleDrawerClose,
  openSidebar,
}) => {
  const [open, setOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const [flatsOpen, setFlatsOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);

  const dispatch = useDispatch();
  const nestedListHandler = () => {
    setOpen((prev) => !prev);
  };
  const registerOpenHandler = () => {
    setRegisterOpen((prev) => !prev);
  };
  const staffOpenHandler = () => {
    setStaffOpen((prev) => !prev);
  };
  const flatOpenHandler = () => {
    setFlatsOpen((prev) => !prev);
  };
  const assetOpenHandler = () => {
    setAssetOpen((prev) => !prev);
  };
  const eventOpenHandler = () => {
    setEventOpen((prev) => !prev);
  };

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });
  // setRegisterOpen(false),
  // setAssetOpen(false),
  // setEventOpen(false),
  // setFlatsOpen(false),
  // setStaffOpen(false),
  // setOpen(false)

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Drawer variant="permanent" open={openSidebar}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <List className="sidebar-anchor-outer">
        <NavLink activeClassName="selected" to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard size={25} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <ListItemButton onClick={nestedListHandler}>
          <ListItemIcon>
            <SiHomeassistantcommunitystore size={20} />
          </ListItemIcon>
          <ListItemText primary="Society" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/add_society">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdAddBusiness size={25} />
                </ListItemIcon>
                <ListItemText primary="Add Society" />
              </ListItemButton>
            </NavLink>
            <NavLink to="/society_list">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdOutlineFormatListBulleted size={25} />
                </ListItemIcon>
                <ListItemText primary="Society Listing" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton onClick={registerOpenHandler}>
          <ListItemIcon>
            <BiLogIn size={25} />
          </ListItemIcon>
          <ListItemText primary="Register User" />
          {registerOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={registerOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/builder_society_register">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdOutlineFormatListBulleted size={23} />
                </ListItemIcon>
                <ListItemText primary="Register Listing" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton onClick={staffOpenHandler}>
          <ListItemIcon>
            <MdOutlineManageAccounts size={25} />
          </ListItemIcon>
          <ListItemText primary="Staff Management" />
          {staffOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={staffOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/builder_staff_management">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AiOutlineUserAdd size={23} />
                </ListItemIcon>
                <ListItemText primary="Register Staff" />
              </ListItemButton>
            </NavLink>
            <NavLink to="/staff_list">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  {" "}
                  <MdOutlineFormatListBulleted size={25} />
                </ListItemIcon>
                <ListItemText primary="Staff Listing" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>

        {/* <List component="div" disablePadding>
            <NavLink to="/">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdAddBusiness size={25} />
                </ListItemIcon>
                <ListItemText primary="Staff Roles" />
              </ListItemButton>
            </NavLink>
          </List>
          <Collapse in={staffOpen} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>
            <NavLink to="/">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdAddBusiness size={25} />
                </ListItemIcon>
                <ListItemText primary="Staff List" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse> */}

        <ListItemButton onClick={flatOpenHandler}>
          <ListItemIcon>
            <SiHomeassistantcommunitystore size={20} />
          </ListItemIcon>
          <ListItemText primary="Flats Management" />
          {flatsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={flatsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/register_flat">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AiOutlineUserAdd size={23} />
                </ListItemIcon>
                <ListItemText primary="Register Flat" />
              </ListItemButton>
            </NavLink>
          </List>
          <List component="div" disablePadding>
            <NavLink to="/flat_listing">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  {" "}
                  <MdOutlineFormatListBulleted size={25} />
                </ListItemIcon>
                <ListItemText primary="Flat List" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton onClick={assetOpenHandler}>
          <ListItemIcon>
            <MdOutlineManageAccounts size={25} />
          </ListItemIcon>
          <ListItemText primary="Asset Management" />
          {assetOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={assetOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/add_asset">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AiOutlineUserAdd size={23} />
                </ListItemIcon>
                <ListItemText primary="Register Asset" />
              </ListItemButton>
            </NavLink>
          </List>
          <List component="div" disablePadding>
            <NavLink to="/asset_list">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdOutlineFormatListBulleted size={25} />
                </ListItemIcon>
                <ListItemText primary="Asset List" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>

        {/* <ListItemButton onClick={eventOpenHandler}>
          <ListItemIcon>
            <SiHomeassistantcommunitystore size={20} />
          </ListItemIcon>
          <ListItemText primary="Event Management" />
          {eventOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={eventOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdAddBusiness size={25} />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse> */}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BiLogOut size={25} />
            </ListItemIcon>
            <ListItemText primary="Logout" onClick={logoutHandler} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
