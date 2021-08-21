import React from "react";
import { Link } from "react-router-dom";
import SpeedIcon from "@material-ui/icons/Speed";
import PersonIcon from "@material-ui/icons/Person";

const Sidebar = () => {
  return (
    <div className="h-screen bg-dark px-6 pt-6">
      <Link to="/">
        <button className="flex items-center font-medium text-gray-400 mb-3 cursor-pointer hover:text-white focus:text-white  w-full">
          <div className="mr-3">
            <SpeedIcon fontSize="large" />
          </div>
          <span className="hidden lg:block">Dashboard</span>
        </button>
      </Link>

      <Link to="/talents">
        <button className="flex items-center font-medium text-gray-400 cursor-pointer hover:text-white focus:text-white w-full">
          <div className="mr-3">
            <PersonIcon fontSize="large" />
          </div>
          <span className="hidden lg:block">Talent</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
