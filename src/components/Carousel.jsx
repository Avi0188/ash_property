import React from "react";

function Carousel({ card }) {
  return (
    <>
      

      <div className="card" key={card.id}>
        <div className="card-details">
          <div className="card-img">
            <img src={card.imgUrl} alt="bed" />
          </div>
          <div className="card-desc">
            <h4 className="card-title">{card.title}</h4>
            <h4 className="card-area">{card.area}</h4>
            <h4 className="card-cap">{card.capacity}</h4>
            <p id="manage">{card.manager}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
