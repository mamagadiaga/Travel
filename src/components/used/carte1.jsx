import React from "react";
import Bouton1 from "./bouton1";
import {TbListDetails} from 'react-icons/tb';
import {BiSolidMap} from 'react-icons/bi';

const Carte1 = (prop) => {
  return (
    <div>
      <div class="card border-0 shadow ">
        <img src={prop.pays} class="card-img-top" alt="..." width='100%' height='200px' />
        <div class="card-body">
          <h5 class="card-title">{prop.titre}</h5>
          <h6 class="card-title text-secondary"><BiSolidMap /> {prop.local}</h6>
          <p className="text-secondary border-top border-bottom p-3 ps-0 mt-3">
            CULTURAL RELAX <span className="float-end fw-bold text-black">{prop.prix}</span>
          </p>
          <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos iusto minima non aliquid repellat,
           sequi earum nulla quibusdam veniam.
          </p>
          <Bouton1 contenu={'Details'} icon={< TbListDetails />} /> 
        </div>
      </div>
    </div>
  );
};

export default Carte1;
