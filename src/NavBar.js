import React from "react";

const NavBar = ({viewOptions, setView}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
              <button class="nav-link active" onClick={() => setView(viewOptions.LIST)}>
                Home
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link disabled" onClick={() => setView(viewOptions.PLANNER)}>
                Planner
              </button>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-success" onClick={() => setView(viewOptions.ADDNEW)} >Add+</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
