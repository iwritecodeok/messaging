import React from "react";
import "../Styles/Header.scss";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../Utils/StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      {/* header left */}
      <div className="header__left">
        {/* profile image */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* history icon */}
        <HistoryRoundedIcon />
      </div>
      {/* Search */}
      <div className="header__search">
        {/* search icon */}
        <SearchRoundedIcon />
        {/* input */}
        <input type="text" />
      </div>
      {/* header right */}
      <div className="header__right">
        {/* help icon */}
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default Header;
