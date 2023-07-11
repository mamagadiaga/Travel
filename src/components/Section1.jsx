import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

const Section1 = () => {
  return (
    <div id="acceuil">
      <div className="container-fluid p-0" id="hautDePage">
        <video id="background-video" autoPlay loop muted>
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
        <nav className="navbar navbar-expand-lg bg-light">
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
                <button
                  className="btn rounded-pill border-0 book text-white"
                  type="submit">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container mt-5 text-center p-5">
        <h4 className="mt-5 pt-5">
          TOUT LE MONDE SAIT DÉSORMAIS <br /> QUE LE DIGITAL ACCOMPAGNE LA
          CROISSANCE DES ENTREPRISES
        </h4>
      </div>
    </div>
  );
};

export default Section1;
