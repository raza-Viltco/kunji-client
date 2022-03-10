import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { Society_profile } from "../../constants/AssetsConstants";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={Society_profile}
          alt="profile"
          height="50px"
          width="50px"
          style={{ borderRadius: "100px" }}
        />
        &nbsp; <div style={{ color: "white" }}>Profile</div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="profile-drop-down-style"
      >
        <MenuItem onClick={handleClose}>
          <Link to="/user_profile">
            <MdOutlineAccountCircle size={25} /> My Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BiLogOut size={25} /> &nbsp;Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
