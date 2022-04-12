// import * as React from "react";
// import { useSelector } from "react-redux";

// import { Link } from "react-router-dom";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { BiLogOut } from "react-icons/bi";
// import { Profile_Img } from "../../constants/AssetsConstants";
// import "./profileDropDown.css";

// export default function BasicMenu() {
//   const appbarImg = useSelector((state) => state.profile.appbarImg);
//   return (
//     <div>
//       <div class="dropdown">
//         <div
//           class="dropdown-toggle"
//           type="button"
//           id="dropdownMenuButton1"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img
//             src={appbarImg ? appbarImg : Profile_Img}
//             alt="profile"
//             height="40px"
//             width="40px"
//             style={{ borderRadius: "100px" }}
//           />
//         </div>
//         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//           <li className="profile-drop-down-style">
//             <Link to="/user_profile">
//               <MdOutlineAccountCircle size={25} /> My Account
//             </Link>
//           </li>
//           <li className="profile-drop-down-style">
//             <BiLogOut size={25} /> &nbsp;Logout
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import * as React from "react";
import { useHistory } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Profile_Img } from "../../constants/AssetsConstants";



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));



export default function CustomizedMenus() {
  const history = useHistory();
  const profileData = useSelector((state) => state.user.data);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const appbarImg = useSelector((state) => state.profile.appbarImg);


  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon size={30} style={{color:"white"}} />}
      >
        <p className="m-0 p-0">
         <img  src={appbarImg ? appbarImg : Profile_Img} 
          alt="profile"
                       height="40px"
                       width="40px"
                      style={{ borderRadius: "100px" }}  className="img-fluid" />
        </p>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/user_profile"
          >
            <i class="fas fa-user-alt"></i>&nbsp; My Profile
          </Link>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />


        <MenuItem >
          <i class="fas fa-sign-out"></i>&nbsp; Logout
        </MenuItem>
       
      </StyledMenu>
    </div>
  );
}



