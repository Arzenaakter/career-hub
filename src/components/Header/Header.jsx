import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-container">
      <nav className="nav-container">
        <Link to="/" className="text-3xl font-bold">
          Tech Hub
        </Link>
        <ul
          className={`nav-link  md:flex-row absolute   md:static duration-400  p-4 ${
            isOpen ? "right-6 top-16 bg-slate-200 flex-col " : "-right-96 "
          }`}>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""
            }>
            Home
          </NavLink>
          <NavLink to="/statistics"  className={({ isActive }) => isActive ? "active" : ""
            }>Statistics</NavLink>
          <NavLink to="/applied-jobs"  className={({ isActive }) => isActive ? "active" : ""
            }>Applied Jobs</NavLink>
          <NavLink to="/blog"  className={({ isActive }) => isActive ? "active" : ""
            }>Blog</NavLink>
        </ul>
        <button className="nav-btn">Start Applying</button>

        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
          <span>
            {isOpen === true ? (
              <XMarkIcon className="h-6 w-6 text-black-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black-500" />
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
