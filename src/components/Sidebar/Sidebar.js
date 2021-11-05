import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ active }) => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/">
          <li className={active == 1 ? "active" : ""}>Global Statistics</li>
        </Link>
        <Link to="/countries-data">
          <li className={active == 2 ? "active" : ""}>Countries Statistics</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
