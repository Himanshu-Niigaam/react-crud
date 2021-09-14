import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  const activeStyle = { color: "#8b0000" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Photos
      </NavLink>
      {" | "}
      <NavLink to="/album" activeStyle={activeStyle}>
        Albums
      </NavLink>
      {" | "}
      <NavLink to="/post" activeStyle={activeStyle}>
        Posts
      </NavLink>
    </nav>
  );
};

export default Links;
