import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/browser">Browser</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/react">React</Link>
      <Link to="/frontendCss">CSS</Link>
    </nav>
  );
};

export default Navbar;
