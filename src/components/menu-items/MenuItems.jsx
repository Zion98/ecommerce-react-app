import React from "react";
import { withRouter } from "react-router-dom";
import "./Menu-items.scss";
const MenuItems = ({ title, imageUrl, history, size, linkUrl, match }) => {
    console.log(match,history)
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItems);
