import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({viewOptions, setView}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">
          The Beckstrom's meal planning
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button class="nav-link active">
                <Link to="/">Home</Link>
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link">
                <Link to="/planner">Planner</Link>
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link active">
                <Link to="/add">Add</Link>
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link active">
                <Link to="/settings">Settings</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
