import React from "react";
import "../Styles/MenuOptions.scss";

function MenuOptions({ Icon, title }) {
  return (
    <div className="menuOption">
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
