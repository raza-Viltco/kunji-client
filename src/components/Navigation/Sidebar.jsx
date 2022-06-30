import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import {
  MdDashboard,
  MdAddBusiness,
  MdOutlineFormatListBulleted,
} from "react-icons/md";

import { AiOutlineUserAdd } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../../redux/actions/Auth/user";
import { checkForPermission } from "../../utils/functions";
import "./sidebar.css";

const Sidebar = ({
  styled,
  theme,
  drawerWidth,
  handleDrawerClose,
  openSidebar,
}) => {
  const userData = useSelector((state) => state.user.data);
  console.log(userData?.data?.role.name);
  const [open, setOpen] = useState(false);
  const [openSocietyConfi, setOpenSocietyConfig] = useState(false);
  const [openUserManagement, setOpenUserManagement] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  const [openSocietyAdmin, setOpenSocietyAdmin] = useState(false);
  const [openVerticalConfig, setOpenVerticalConfig] = useState(false);

  const dispatch = useDispatch();
  const nestedListHandler = () => {
    setOpen((prev) => !prev);
  };

  const openSocietyConfigHandler = () => {
    setOpenSocietyConfig((prev) => !prev);
  };
  const openUserManagementHander = () => {
    setOpenUserManagement((prev) => !prev);
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
                <i class="fad fa-columns" id="iconstyle"></i>
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">Dashboard</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>

        {userData?.data?.role.name === "kunji admin" && (
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
                      <MdAddBusiness size={20} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Add Society</span>
                    </ListItemText>
                  </ListItemButton>
                </NavLink>
                <NavLink to="/society_list">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={20} />
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

        {/* -----------------------department--------------- */}
        {userData?.data?.role.name !== "Security Guard" && (
          <NavLink activeClassName="selected" to="/add_kunji_department">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <i class="fas fa-atlas" id="iconstyle"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="font-dashboard">Department</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink>
        )}

        {userData?.data?.role.name !== "Security Guard" && (
          <>
            <ListItemButton onClick={openUserManagementHander}>
              <ListItemIcon>
                <SiHomeassistantcommunitystore size={20} />
              </ListItemIcon>
              <ListItemText>
                <span className="font-dashboard">User Management</span>
              </ListItemText>
              {openUserManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUserManagement} timeout="auto" unmountOnExit>
              {checkForPermission("User Management", "Assign Permissions") && (
                <>
                  <List component="div" disablePadding>
                    <NavLink to="/kunji_Role">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <AiOutlineUserAdd size={23} />
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">Create Role</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                  <List component="div" disablePadding>
                    <NavLink to="/View_Role">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-eye" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">View Roles</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                </>
              )}

              {checkForPermission("User Management", "Create a User") && (
                <List component="div" disablePadding>
                  <NavLink to="/user_kunji_creation">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <i class="fas fa-plus" id="iconstyle"></i>
                      </ListItemIcon>
                      <ListItemText>
                        <span className="font-dashboard">
                          Create Staff Member
                        </span>
                      </ListItemText>
                    </ListItemButton>
                  </NavLink>
                </List>
              )}

              {checkForPermission(
                "User Management",
                "Add Society User Listing"
              ) && (
                <List component="div" disablePadding>
                  <NavLink to="/staff_member_list">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <MdOutlineFormatListBulleted size={20} />
                      </ListItemIcon>
                      <ListItemText>
                        <span className="font-dashboard">
                          Staff Member Listing
                        </span>
                      </ListItemText>
                    </ListItemButton>
                  </NavLink>
                </List>
              )}

              {userData?.data?.role.name !== "kunji admin" &&
                checkForPermission("User Management", "Approve user") && (
                  <List component="div" disablePadding>
                    <NavLink to="/user_kunji_approval">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-user-check" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">User Approvals</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
            </Collapse>
          </>
        )}

        {/* ----------society Profile---- */}
        {userData?.data?.role.name !== "kunji admin" &&
          userData?.data?.role.name !== "Security Guard" && (
            <>
              <NavLink to="/society_profile">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <i class="fas fa-address-card" id="iconstyle"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Society Profile</span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </>
          )}

        {userData?.data?.role.name !== "kunji admin" &&
          userData?.data?.role.name !== "Security Guard" &&
          userData?.data?.society?.society_type === 1 && (
            <>
              <ListItemButton onClick={openSocietyConfigHandler}>
                <ListItemIcon>
                  <i class="fas fa-building" id="iconstyle"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="font-dashboard">Society Configuration</span>
                </ListItemText>
                {/* className="font-dashboard" */}
                {openSocietyConfi ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSocietyConfi} timeout="auto" unmountOnExit>
                {(checkForPermission("Property Mgmt.", "Mapping Level1") ||
                  checkForPermission(
                    "Property Mgmt.",
                    "View Buildings/Sector"
                  )) && (
                  <List component="div" disablePadding>
                    <NavLink to="/add_sector">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <AiOutlineUserAdd size={23} />
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            Add Sector/ Block No
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
                {/* <List component="div" disablePadding>
                <NavLink to="/add_street">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <MdOutlineFormatListBulleted size={20} />
                    </ListItemIcon>
                    <ListItemText primary="Street" />
                  </ListItemButton>
                </NavLink>
              </List> */}
                {(checkForPermission("Property Mgmt.", "level2") ||
                  checkForPermission("Property Mgmt.", "Full Map")) && (
                  <List component="div" disablePadding>
                    <NavLink to="/add_plots">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-layer-group" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Plots </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
              </Collapse>
            </>
          )}
        {/* ------vertical-society------- */}

        {userData?.data?.role.name !== "kunji admin" &&
          userData?.data?.role.name !== "Security Guard" &&
          userData?.data?.society?.society_type === 0 && (
            <>
              <ListItemButton onClick={OpenVerticalConfigHandler}>
                <ListItemIcon>
                  <i class="fas fa-gopuram" id="iconstyle"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="font-dashboard">Society Configuration</span>
                </ListItemText>
                {openVerticalConfig ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openVerticalConfig} timeout="auto" unmountOnExit>
                {(checkForPermission("Property Mgmt.", "Mapping Level1") ||
                  checkForPermission(
                    "Property Mgmt.",
                    "View Buildings/Sector"
                  )) && (
                  <List component="div" disablePadding>
                    <NavLink to="/define_building">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-building" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Building</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
                {(checkForPermission("Property Mgmt.", "level2") ||
                  checkForPermission("Property Mgmt.", "Full Map")) && (
                  <List component="div" disablePadding>
                    <NavLink to="/add_apartment">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fal fa-building" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">Apartment</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
              </Collapse>
            </>
          )}

        {/* ---------------------------property ownership-------------- */}
        {userData?.data?.role.name !== "kunji admin" && (
          <>
            {(checkForPermission("Property Mgmt.", "Add Property Owner") ||
              checkForPermission("Property Mgmt.", "Property List")) && (
              <NavLink to="/property_ownership">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MdDashboard size={20} />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Property Ownership</span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            )}
          </>
        )}

        {/* ----------assets---------- */}

        {userData?.data?.role.name !== "kunji admin" && (
          <>
            {checkForPermission("Assets", "View Assets and Facilities") && (
              <NavLink to="/assets">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <i class="fad fa-ball-pile" id="iconstyle"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">Assets</span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            )}
          </>
        )}

        {/* --------------society-Administrator--------- */}
        {userData?.data?.role.name !== "kunji admin" &&
          userData?.data?.role.name !== "Security Guard" && (
            <>
              <ListItemButton onClick={OpenSocietyAdminHandler}>
                <ListItemIcon>
                  <i class="fas fa-user-shield" id="iconstyle"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="font-dashboard">Society Administration</span>
                </ListItemText>
                {/* className="font-dashboard" */}
                {openSocietyAdmin ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSocietyAdmin} timeout="auto" unmountOnExit>
                {(checkForPermission(
                  "Society Administration",
                  "Charges List"
                ) ||
                  checkForPermission(
                    "Society Administration",
                    "Add Society Charges"
                  )) && (
                  <List component="div" disablePadding>
                    <NavLink to="/society_charges_type">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i
                            class="fas fa-file-invoice-dollar"
                            id="iconstyle"
                          ></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Charges Type </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
                {(checkForPermission(
                  "Society Administration",
                  "Generate Bill"
                ) ||
                  checkForPermission(
                    "Society Administration",
                    "Generate Society Bills"
                  )) && (
                  <List component="div" disablePadding>
                    <NavLink to="/society_generate_bill">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i
                            class="fal fa-file-invoice-dollar"
                            id="iconstyle"
                          ></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            {" "}
                            Generate Bill{" "}
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission("Society Administration", "View Bill") && (
                  <List component="div" disablePadding>
                    <NavLink to="/view_bill">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fal fa-file-invoice" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">View Bill </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission(
                  "Society Administration",
                  "Update Emergency Contacts"
                ) && (
                  <List component="div" disablePadding>
                    <NavLink to="/emergency_contacts">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-phone-alt" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            Emergency Contact
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission("Society Administration", "Polls") && (
                  <List component="div" disablePadding>
                    <NavLink to="/poll">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fad fa-ball-pile" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Poll</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission(
                  "Society Administration",
                  "Send Notices"
                ) && (
                  <List component="div" disablePadding>
                    <NavLink to="/society_notices">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-newspaper" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">Notices</span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
              </Collapse>
            </>
          )}

        <List className="sidebar-anchor-outer">
          {/* ----------------------------------------------------society List-------------- */}

          {/* ---------security-management---- */}

          {userData?.data?.role.name !== "kunji admin" && (
            <>
              <ListItemButton onClick={OpenSecurityHandler}>
                <ListItemIcon>
                  <i class="far fa-shield-alt" id="iconstyle"></i>
                </ListItemIcon>
                <ListItemText>
                  <span className="font-dashboard">Security Management</span>
                </ListItemText>
                {/* className="font-dashboard"  */}
                {openSecurity ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSecurity} timeout="auto" unmountOnExit>
                {checkForPermission("Security Mgmt.", "Visitor List") && (
                  <List component="div" disablePadding>
                    <NavLink to="/society_visitor_list">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="far fa-list" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Visitor List </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission("Security Mgmt.", "Servant List") && (
                  <List component="div" disablePadding>
                    <NavLink to="/servant_visitor_list">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-thumbs-up" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            Servant Approval
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission(
                  "Security Mgmt.",
                  "Servant Gatepass Approvals"
                ) && (
                  <List component="div" disablePadding>
                    <NavLink to="/gate_pass_approval">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-id-card" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            Gate Pass Approval
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission(
                  "Security Mgmt.",
                  "Delivery Booking List"
                ) && (
                  <List component="div" disablePadding>
                    <NavLink to="/society_delivery_booking">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-truck" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            Delivery Booking
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission(
                  "Security Mgmt.",
                  "Registered Vehicles"
                ) && (
                  <List component="div" disablePadding>
                    <NavLink to="/vehicle_list">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-car-side" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard">
                            Registered Vehicles
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission("Security Mgmt.", "Panic Alerts") && (
                  <List component="div" disablePadding>
                    <NavLink to="/society_panic_alert">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-cash-register" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Panic Alert </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}

                {checkForPermission(
                  "Security Mgmt.",
                  "Open/Closed Complaints List"
                ) && (
                  <List component="div" disablePadding>
                    <NavLink to="/complaints">
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <i class="fas fa-user-headset" id="iconstyle"></i>
                        </ListItemIcon>
                        <ListItemText>
                          <span className="font-dashboard"> Complaints </span>
                        </ListItemText>
                      </ListItemButton>
                    </NavLink>
                  </List>
                )}
              </Collapse>
            </>
          )}

          {/* ------------------------terms and conditions------------- */}
          {userData?.data?.role.name === "kunji admin" && (
            <>
              <NavLink to="/terms_condition">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <i class="fas fa-exclamation-circle" id="iconstyle"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <span className="font-dashboard">
                        Terms and Conditions
                      </span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </>
          )}

          <ListItem disablePadding onClick={logoutHandler}>
            <ListItemButton>
              <ListItemIcon>
                <BiLogOut size={20} />
              </ListItemIcon>
              <ListItemText>
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
