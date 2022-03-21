import * as React from "react";

import { Link } from "react-router-dom";
import { Profile_Img } from "../../constants/AssetsConstants";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import "./profileDropDown.css";

export default function BasicMenu() {
  return (
    <div>
      <div class="dropdown">
        <div
          class="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={Profile_Img}
            alt="profile"
            height="40px"
            width="40px"
            style={{ borderRadius: "100px" }}
          />
        </div>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="profile-drop-down-style">
            <Link to="/user_profile">
              <MdOutlineAccountCircle size={25} /> My Account
            </Link>
          </li>
          <li className="profile-drop-down-style">
            <BiLogOut size={25} /> &nbsp;Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
