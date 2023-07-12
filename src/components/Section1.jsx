import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BiSolidMap } from "react-icons/bi";
import NavBar from "./used/NavBar";
import { CgMenuGridR } from "react-icons/cg";
import { RiMenuUnfoldFill } from "react-icons/ri";
import {
  AiFillFilter,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

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
        <NavBar />
      </div>
      <div class="container mt-5 text-white p-5">
        <h6 class="text-light mt-5">OUR PACKAGES</h6>
        <h1 class="text-light fw-bold">
          Search your
          <span className="border-bottom border-primary border-3">holiday</span>
        </h1>
        <div
          className="row bg-white mt-5 text-secondary p-3 pb-5 rounded-3 position-relative"
          id="position">
          <div className="col-md-4 colonne">
            <span>Search your destination: </span>
            <div className="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control border-end-0 shadow-none border-info "
                placeholder="Enter name here..."
                aria-label="Lieu"
                aria-describedby="lieu-addon"
              />
              <span className="input-group-text border-start-0 bg-transparent border-info">
                <BiSolidMap />
              </span>
            </div>
          </div>
          <div className="col-md-4 colonne">
            <span>Select your date: </span>
            <input
              type="date"
              className="form-control mt-3 border-info bg-secondary bg-opacity-10 shadow-none bg-transparent"
              placeholder="Enter name here..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="col-md-4 colonne">
            <span>
              Max price: <span className="float-end fw-bold">$5000</span>{" "}
            </span>
            <input
              type="range"
              className="form-range bg-transparent mt-3 border border-info p-3 rounded-2 bg-opacity-10 shadow-none"
              min="0"
              max="5"
              step="0.5"
              id="customRange3"
            />
          </div>
          <button
            className="btn rounded-pill w-auto border-0 book text-white px-3 position-absolute top-100 start-50 translate-middle"
            type="submit">
            {" "}
            <AiFillFilter /> More filters
          </button>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 size">
            <span className="fs-5">
              <AiFillYoutube className="icones text-white-75" />
              <AiOutlineTwitter className="icones text-white-75" />
              <AiFillInstagram className="icones text-white-75" />
            </span>
          </div>
          <div class="col-md-6 text-end size">
            <span className="fs-5">
              <CgMenuGridR className="icones text-white-75" />
              <RiMenuUnfoldFill className="icones text-white-75" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
