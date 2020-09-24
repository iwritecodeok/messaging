import React from "react";
import "../Styles/MenuOptions.scss";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function MenuOptions({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("room").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="menuOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="menuOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="menuOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default MenuOptions;
