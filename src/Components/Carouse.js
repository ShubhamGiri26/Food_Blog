import React from 'react';
import Slider from "react-slick";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carouse = () => {
    // Carousel settings
    const settings = {
        dots: true, // Enable dots/indicators
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Enable arrows for navigation
    };  
return (
    <>
       {/* Carousel Section */}
       <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-slide">
            <img
              src="https://via.placeholder.com/1200x400?text=Delicious+Dish+1"
              alt="Delicious Dish 1"
            />
            <div className="carousel-caption">
              <h3>Delicious Dish 1</h3>
              <p>A mouth-watering appetizer for your food journey.</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img
              src="https://via.placeholder.com/1200x400?text=Delicious+Dish+2"
              alt="Delicious Dish 2"
            />
            <div className="carousel-caption">
              <h3>Delicious Dish 2</h3>
              <p>A rich, savory main course to satisfy your hunger.</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img
              src="https://via.placeholder.com/1200x400?text=Delicious+Dish+3"
              alt="Delicious Dish 3"
            />
            <div className="carousel-caption">
              <h3>Delicious Dish 3</h3>
              <p>End your meal with a sweet, irresistible dessert.</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Carouse
