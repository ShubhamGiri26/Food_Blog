import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Cards = () => {

  return (
    <>

<div class="section" id="menu">
      <div class="container">
        <ul class="category">
          <li>All</li>
          <li><Link className="head-link" to="/momos"> Momos </Link></li>
          <li><Link className="head-link" to="/sweets">Sweets</Link></li>
          <li><Link className="head-link" to="/pizza">Pizza</Link></li>
          <li><Link className="head-link" to="/burger">Burger</Link></li>
          <li><Link className="head-link" to="/pasta">Pasta</Link></li>
        </ul>

        <div class="container">
          <div class="restaurant-menu">
            <div class="menu-item">
              <img src="https://th.bing.com/th/id/OIP.2U0ka01fdakHh1vY9rp2qwHaE8?rs=1&pid=ImgDetMain" alt="" />

              <div class="title">Pizza | Chineese & Italian</div>

              <div class="location">Italy</div>

              <div class="order flex">
                <div class="price">$25.00</div>
                <a href="#" class="btn btn-menu">Add to Cart</a>
              </div>
            </div>

            <div class="menu-item">
              <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-2.jpg" alt="" />

              <div class="title">Barbeque | Chineese & Thai</div>

              <div class="location">China</div>

              <div class="order flex">
                <div class="price">$25.00</div>
                <a href="#" class="btn btn-menu">Add to Cart</a>
              </div>
            </div>

            <div class="menu-item">
              <img src="https://th.bing.com/th/id/OIP.ik6ESORc1D39WuhNpDHIOAHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />

              <div class="title">Cheese Burger | Chineese & Thai</div>

              <div class="location">Lahore, Pakistan</div>

              <div class="order flex">
                <div class="price">$25.00</div>
                <a href="#" class="btn btn-menu">Add to Cart</a>
              </div>
            </div>

            <div class="menu-item">
              <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-4.jpg" alt="" />

              <div class="title">Pasta With Meat & Veg | Chineese & Italian</div>

              <div class="location">Italy</div>

              <div class="order flex">
                <div class="price">$25.00</div>
                <a href="#" class="btn btn-menu">Add to Cart</a>
              </div>
            </div>

            <div class="menu-item">
              <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-5.jpg" alt="" />

              <div class="title">Fried Chicken Piece | Japanese </div>

              <div class="location">Tokyo,Japan</div>

              <div class="order flex">
                <div class="price">$25.00</div>
                <a href="#" class="btn btn-menu">Add to Cart</a>
              </div>
            </div>

            <div class="menu-item">
              <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-6.jpg" alt="" />

              <div class="title">Pancake Strawbeery Blueberry | Japanese & American</div>

              <div class="location">Tokyo, Japan</div>

              <div class="order flex">
                <div class="price">$25.00</div>
                <a href="#" class="btn btn-menu">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Cards

