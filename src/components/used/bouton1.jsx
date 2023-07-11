import React from "react";

const Bouton1 = (prop) => {
  return (
    <button className="btn rounded-pill border-0 book text-white px-3" type="submit">
      {prop.contenu} {prop.icon}
    </button>
  );
};

export default Bouton1;
