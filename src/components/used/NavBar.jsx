import React from 'react';
import Bouton1 from './bouton1';
import {CgMenuGridR} from 'react-icons/cg';
import { MdOutlineTravelExplore } from "react-icons/md";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="#">
              <MdOutlineTravelExplore className="text-primary" />
              Travel.
            </a>
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler border-0">
                <CgMenuGridR className="text-primary fs-2" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary me-3"
                    aria-current="page"
                    href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary me-3"
                    aria-current="page"
                    href="#">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary me-3"
                    aria-current="page"
                    href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary me-3"
                    aria-current="page"
                    href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary me-3"
                    aria-current="page"
                    href="#">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary me-3"
                    aria-current="page"
                    href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Bouton1 contenu={"Book Now"} />
              </form>
            </div>
          </div>
        </nav>
        </div>
    );
};

export default NavBar;