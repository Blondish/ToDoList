import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px"
};

export default Header;
