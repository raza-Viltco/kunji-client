import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import { MdOutlineTaskAlt } from "react-icons/md";
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
  const userData = useSelector((state) => state.user.data);
  const [open, setOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const [flatsOpen, setFlatsOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [openSocietyConfi, setOpenSocietyConfig] = useState(false);
  const [openUserManagement, setOpenUserManagement] = useState(false);
  const [openStaff, setOpenStaff] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  const [openSocietyAdmin, setOpenSocietyAdmin] = useState(false);
  const [openVerticalConfig, setOpenVerticalConfig] = useState(false);

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
  const facilityOpenHandler = () => {
    setFacilityOpen((prev) => !prev);
  };
  const userOpenHandler = () => {
    setUserOpen((prev) => !prev);
  };
  const openSocietyConfigHandler = () => {
    setOpenSocietyConfig((prev) => !prev);
  };
  const openUserManagementHander = () => {
    setOpenUserManagement((prev) => !prev);
  };
  const OpenStaffHandler = () => {
    setOpenStaff((prev) => !prev);
  };
  const OpenSecurityHandler = () => {
    setOpenSecurity((prev) => !prev);
  };
  const OpenSocietyAdminHandler = () => {
    setOpenSocietyAdmin((prev) => !prev);
  };
  const OpenVerticalConfigHandler = () => {
    setOpenVerticalConfig((prev) => !prev);
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
              <ListItemText>
                <span className="font-dashboard">Dashboard</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* 
        {userData?.data?.roles[0].name === "Super Admin" && (
          <>
            <ListItemButton onClick={userOpenHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText>
              <span className="font-dashboard" >User Management </span>
                </ListItemText>
              {userOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={userOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/add_user">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AiOutlineUserAdd size={25} />
                    </ListItemIcon>
                    <ListItemText>
                    <span className="font-dashboard" >Add User</span>
                      </ListItemText>
                  </ListItemButton>
                </NavLink>
                <NavLink to="/user_listing">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText>
                    <span className="font-dashboard" > User Listing </span>
                      </ListItemText>
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )} */}

        {userData?.data?.roles.name === "Super admin" && (
          <>
            <ListItemButton onClick={nestedListHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Society</span>
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/add_society">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdAddBusiness size={25} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Add Society</span>
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
                <NavLink to="/society_list">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Society Listing</span>
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )}

        {userData?.data?.roles.name === "Super admin" && (
          <>
            <ListItemButton onClick={openUserManagementHander}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText primary="User Management" />
              {openUserManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUserManagement} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/kunji_Role">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AiOutlineUserAdd size={23} />
                    </ListItemIcon>
                    <ListItemText primary="Role" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/user_kunji_creation">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="User Creation" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/user_kunji_approval">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="User Approvals" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )}

{/* ----------society Profile---- */}
<NavLink  to="/society_profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard size={25} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Society Profile</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>

        {userData?.data?.roles.name === "Society Admin" && (
          <>
            <ListItemButton onClick={openSocietyConfigHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText primary="Society Configuration" />
              {openSocietyConfi ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSocietyConfi} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/add_sector">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AiOutlineUserAdd size={23} />
                    </ListItemIcon>
                    <ListItemText primary="Add Sector/ Block No" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/add_street">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Street" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/add_plots">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Plots" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )}
        {/* ------vertical-society------- */}

        {userData?.data?.roles.name === "Society Admin" && (
          <>
            <ListItemButton onClick={OpenVerticalConfigHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Society Configuration B</span>
              </ListItemText>
              {openVerticalConfig ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openVerticalConfig} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/define_building">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard"> Building</span>
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/add_apartment">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Apartment</span>
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )}
{/* ---------------------------property ownership-------------- */}
<NavLink  to="/property_ownership">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard size={25} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Property Ownership</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
{/* ----------assets---------- */}
<NavLink  to="/assets">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard size={25} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Assets</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>



        {/* --------------society-Administrator--------- */}
        {/* {userData?.data?.roles.name === "Society Admin" && (
        <> */}
          <ListItemButton onClick={OpenSocietyAdminHandler}>
            <ListItemIcon>
              <SiHomeassistantcommunitystore size={20} />
            </ListItemIcon>
            <ListItemText primary="Society Administration" />
            {openSocietyAdmin ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSocietyAdmin} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/society_charges_type">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AiOutlineUserAdd size={23} />
                  </ListItemIcon>
                  <ListItemText primary="Charges Type" />
                </ListItemButton>
              </NavLink>
            </List>
            <List component="div" disablePadding>
              <NavLink to="/society_generate_bill">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MdOutlineFormatListBulleted size={25} />
                  </ListItemIcon>
                  <ListItemText primary="Generate Bill" />
                </ListItemButton>
              </NavLink>
            </List>
            <List component="div" disablePadding>
              <NavLink to="/view_bill">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MdOutlineFormatListBulleted size={25} />
                  </ListItemIcon>
                  <ListItemText primary="View  Bill" />
                </ListItemButton>
              </NavLink>
            </List>
          </Collapse>
        {/* </>
        )}  */}
        {/* {userData?.data?.roles[0].name === "Super Admin" && (
          <>
            <ListItemButton onClick={OpenStaffHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText primary="Staff Management" />
              {openStaff ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStaff} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/add_kunji_staff">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AiOutlineUserAdd size={23} />
                    </ListItemIcon>
                    <ListItemText primary="Add Staff Member" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/list_kunji_staff">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Staff Listing" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )} */}

        {/* {userData?.data?.roles[0].name === "Super Admin" && ( */}
        {/* <>
            <NavLink activeClassName="selected" to="/add_kunji_department">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MdDashboard size={25} />
                  </ListItemIcon>
                  <ListItemText primary="Department" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </> */}
        {/* )} */}

        {/* {userData?.data?.roles[0].name === "Society Admin" && (
          <>
            <ListItemButton onClick={registerOpenHandler}>
              <ListItemIcon>
                <BiLogIn size={25} />
              </ListItemIcon>
              <ListItemText>
              Register Resident
                </ListItemText>
              {registerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={registerOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/builder_society_register">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={23} />
                    </ListItemIcon>
                    <ListItemText>
                    Resident Listing
                      </ListItemText>
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )} */}

        {/* {userData?.data?.roles[0].name === "Society Admin" && (
          <>
            <ListItemButton onClick={staffOpenHandler}>
              <ListItemIcon>
                <MdOutlineManageAccounts size={25} />
              </ListItemIcon>
              <ListItemText>
              Staff Management
                </ListItemText>
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
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Staff Listing" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )} */}

        <List className="sidebar-anchor-outer">
          {/* {userData?.data?.roles[0].name === "Society Admin" && (
            <>
              <ListItemButton onClick={facilityOpenHandler}>
                <ListItemIcon>
                  <SiHomeassistantcommunitystore size={20} />
                </ListItemIcon>
                <ListItemText primary="Facility Management" />
                {facilityOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={facilityOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <NavLink to="/facility_listing">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <MdAddBusiness size={25} />
                      </ListItemIcon>
                      <ListItemText primary="Facility Listing" />
                    </ListItemButton>
                  </NavLink>
                </List>
              </Collapse>
            </>
          )} */}

          {/* <List component="div" disablePadding>
        {userData?.data?.roles[0].name === "Society Admin" && (
          <>
            <ListItemButton onClick={facilityOpenHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText primary="Facility Management" />
              {facilityOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={facilityOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/facility_listing">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdAddBusiness size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Facility Listing" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </>
        )}

         {/* <List component="div" disablePadding>
            <NavLink to="/">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MdOutlineTaskAlt size={25} />
                </ListItemIcon>
                <ListItemText primary="Staff Roles" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        )} */}

          {/* {userData?.data?.roles[0].name === "Society Admin" && (
            <>
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
                        <MdOutlineFormatListBulleted size={25} />
                      </ListItemIcon>
                      <ListItemText primary="Flat List" />
                    </ListItemButton>
                  </NavLink>
                </List>
              </Collapse>
            </>
          )} */}

          {/* {userData?.data?.roles[0].name === "Society Admin" && (
            <>
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
                      <ListItemText primary="Add Asset" />
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
            </>
          )} */}

          {/* ----------------------------------------------------society List-------------- */}

          {/* ---------security-management---- */}

          {/* {userData?.data?.roles.name === "Society Admin" && (
          <> */}
            <ListItemButton onClick={OpenSecurityHandler}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText primary="Security Management" />
              {openSecurity ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSecurity} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/society_visitor_list">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <AiOutlineUserAdd size={23} />
                    </ListItemIcon>
                    <ListItemText primary="Visitor List" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/servant_visitor_list">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Servant Approval" />
                  </ListItemButton>
                </NavLink>
              </List>

              <List component="div" disablePadding>
                <NavLink to="/gate_pass_approval">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Gate Pass Approval" />
                  </ListItemButton>
                </NavLink>
              </List>

              <List component="div" disablePadding>
                <NavLink to="/society_delivery_booking">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Delivery Booking" />
                  </ListItemButton>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/society_panic_alert">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Panic Alert" />
                  </ListItemButton>
                </NavLink>
              </List>

              <List component="div" disablePadding>
                <NavLink to="/complaints">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={25} />
                    </ListItemIcon>
                    <ListItemText primary="Complaints" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          {/* </>
         )}  */}

          {/* -----------------------department--------------- */}
          <NavLink activeClassName="selected" to="/add_kunji_department">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdDashboard size={25} />
                </ListItemIcon>
                <ListItemText primary="Department" />
              </ListItemButton>
            </ListItem>
          </NavLink>

          {/* --------notices--------------- */}
          {userData?.data?.roles.name === "Society Admin" && (
          <>
            <NavLink to="/society_notices">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MdDashboard size={25} />
                  </ListItemIcon>
                  <ListItemText primary="Notices" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </>
          )} 


{/* ------------------------terms and conditions------------- */}
<NavLink  to="/terms_condition">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard size={25} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Terms and Conditions</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
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
        </Collapse>  */}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BiLogOut size={25} />
              </ListItemIcon>
              <ListItemText onClick={logoutHandler}>
                <span className="font-dashboard">Logout</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </List>
    </Drawer>
  );
};

export default Sidebar;
