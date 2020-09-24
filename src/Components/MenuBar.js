import React from "react";
import "../Styles/MenuBar.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
// import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import DraftsRoundedIcon from "@material-ui/icons/DraftsRounded";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import MenuOption from "./MenuOptions";

function MenuBar() {
  return (
    <div className="menubar">
      {/* menubar__header */}
      <div className="menubar__header">
        <div className="menubar__info">
          <h2>Developer chat</h2>
          <h3>
            <FiberManualRecordIcon className="statusIcon" />
            justin nichols
          </h3>
        </div>
        <CreateRoundedIcon className="createIcon" />
      </div>
      <MenuOption Icon={InsertCommentRoundedIcon} title="Threads" />
      <MenuOption
        Icon={AlternateEmailRoundedIcon}
        title="Mentions & Reactions"
      />
      <MenuOption Icon={DraftsRoundedIcon} title="Saved items" />
      <MenuOption Icon={BookmarkBorderRoundedIcon} title="Discover Channels" />
      <MenuOption Icon={PeopleRoundedIcon} title="People & Groups" />
      <MenuOption Icon={AppsRoundedIcon} title="Apps" />
      <MenuOption Icon={FindInPageRoundedIcon} title="File Finder" />
      <MenuOption Icon={ExpandLessRoundedIcon} title="show less" />
      <hr />
      <MenuOption Icon={ExpandMoreRoundedIcon} title="Channels" />
      <MenuOption Icon={AddRoundedIcon} title="Add Channels" />
      {/* connect to db and list all active channels */}
    </div>
  );
}

export default MenuBar;
