import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">moviesForU</a>
      </div>
      <div className="flex-none gap-2">
        <Link to="/login" className="btn btn-outline btn-info">
          LogIn
        </Link>
        <Link to="/register" className="btn btn-outline btn-warning">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
