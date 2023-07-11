import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BiSolidMap } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillFilter, AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Bouton1 from "./used/bouton1";

const Section3 = () => {
  return (
    <div id="acceuil" className="mt-5">
      <div className="container-fluid p-0 " id="hautDePage">
        <video id="background-video" autoPlay loop muted>
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="container mt-5 text-white p-5">
        <h6 class="text-light mt-5">KEEP IN TOUCH</h6>
        <h1 class="text-light fw-bold">
          Travel with us
        </h1>
       <div className="row mt-3 text-end">
        <div className="col">
        <input class="form-control" type="search" placeholder="Email address" aria-label="Search" />
        </div>
        <div className="col">
        <button
            className="btn rounded-3 w-auto border-0 book text-white px-3" type="submit"> <BsFillSendFill /> SEND
        </button>
        </div>
       </div>
        <div className="row bg-white mt-5 text-secondary p-0 rounded-3">
          <div className="col-md-3  p-3">
          <span className="navbar-brand text-black fw-bold fs-4" href="#">
              <MdOutlineTravelExplore className="text-primary" />
              Travel.
            </span>
            <div className="input-group mb-3 mt-3">
              <span className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit 
                accusantium libero? 
              </span>
              <span className="fs-5">
                <AiOutlineTwitter className="icones" />
                <AiFillYoutube className="icones" />
                <AiFillInstagram className="icones" />
              </span>
            </div>
          </div>
          <div className="col-md-3  p-3">
          <h5 className="text-black fw-bold">Our agency</h5>
           <ul>
            <li className="icones">Services</li>
            <li className="icones">Insurance</li>
            <li className="icones"> Agency</li>
            <li className="icones">Tourisme</li>
            <li className="icones">Payment</li>
           </ul>
          </div>
          <div className="col-md-3  p-3">
          <h5 className="text-black fw-bold">Partners</h5>
           <ul>
            <li className="icones">Booking</li>
            <li className="icones">RentalCar</li>
            <li className="icones">HostelWorld</li>
            <li className="icones">Trivago</li>
            <li className="icones">TripAdvisor</li>
           </ul>
          </div>
          <div className="col-md-3  p-3">
           <h5 className="text-black fw-bold">Last minute</h5>
           <ul>
            <li className="icones">London</li>
            <li className="icones">California</li>
            <li className="icones">Indonesia</li>
            <li className="icones">Europe</li>
            <li className="icones">Oceana</li>
           </ul>
          </div>
           <div className="container text-white bg-info rounded-bottom">
        <div class="row">
          <div class="col-md-6 size">
            <p>BEST TRAVEL WEBSITE THEME</p>
          </div>
          <div class="col-md-6 text-end size">
            <p>COPYRIGHTS RESERVED-ISRATECH 2022</p>
          </div>
        </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Section3;
