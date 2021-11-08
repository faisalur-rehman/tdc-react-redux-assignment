import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li>Global Statistics</li>
        </NavLink>
        <NavLink
          to="/countries-data"
          className={(navData) => (navData.isActive ? "active" : "hello")}
        >
          <li>Countries Statistics</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
