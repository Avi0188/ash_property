import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
function Carousel({ card }) {
  const sliderRef = useRef(null);
console.log(card)
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {card.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-details">
              <div className="card-img">
                <img src={item.imgUrl} alt="bed" />
              </div>
              <div className="card-desc">
                <h4 className="card-title">{item.title}</h4>
                <h4 className="card-area">{item.area}</h4>
                <h4 className="card-cap">{item.capacity}</h4>
                <p id="manage">{item.manager}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
