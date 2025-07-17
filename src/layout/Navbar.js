import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#9370db",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">
        {/* Brand Logo or Name */}
        <Link
          className="navbar-brand fw-bold text-white"
          style={{ fontSize: "1.5rem", letterSpacing: "1px" }}
          to="/"
        >
          🧩 Full Stack App
        </Link>

        {/* Add User Button */}
        <Link
          className="btn"
          style={{
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontWeight: "500",
            padding: "6px 16px",
            borderRadius: "6px",
          }}
          to="/adduser"
        >
          ➕ Add User
        </Link>
      </div>
    </nav>
  );
}
