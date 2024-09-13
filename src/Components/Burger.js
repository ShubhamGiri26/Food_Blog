import React from 'react'
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <>
        <div class="section" id="menu">
        <div class="container">
          <ul class="category">
          <li class="active">
            <Link to="/cards">All  </Link>
            </li>
            <li>
              <Link className="head-link" to="/momos"> Momos </Link>
            </li>
            <li>
              <Link className="head-link" to="/sweets"> Sweets </Link>
            </li>
            <li>
              <Link className="head-link" to="/pizza"> Pizza </Link>
            </li>
            <li>
              <Link className="head-link" to="/burger"> Burger  </Link>
            </li>
            <li>
              <Link className="head-link" to="/pasta">Pasta  </Link>
            </li>
          </ul>

          <div class="container">
            <div class="restaurant-menu">
              <div class="menu-item">
                <img
                  src="https://www.spiceupthecurry.com/wp-content/uploads/2014/07/aloo-tikki-burger-recipe-9-500x500.jpg" 
                  alt=""
                />

                <div class="title">Veg CheeseBurger | Chineese & Italian</div>

                <div class="location">Italy</div>

                <div class="order flex">
                  <div class="price">$25.00</div>
                  <a href="#" class="btn btn-menu">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div class="menu-item">
                <img
                  src="https://www.jessicagavin.com/wp-content/uploads/2018/05/vegan-black-bean-burgers-5-1200-536x536.jpg"   alt=""/>

                <div class="title">Black Bean Burger | Chineese & Italian</div>

                <div class="location">Italy</div>

                <div class="order flex">
                  <div class="price">$25.00</div>
                  <a href="#" class="btn btn-menu">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div class="menu-item">
                <img
                  src="https://th.bing.com/th/id/OIP.EvczSVXbNwpUnKxr9Mca7wHaHa?w=503&h=503&rs=1&pid=ImgDetMain"
                  alt=""
                />

                <div class="title">Chicken Burger | Chineese & Italian</div>

                <div class="location">Italy</div>

                <div class="order flex">
                  <div class="price">$25.00</div>
                  <a href="#" class="btn btn-menu">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div class="menu-item">
                <img
                  src="https://i.pinimg.com/originals/a8/40/fb/a840fbb0448b439c86c200578169308b.jpg"
                  alt=""
                />

                <div class="title">Roasted garlic and yam Burger | Chineese & Italian</div>

                <div class="location">Italy</div>

                <div class="order flex">
                  <div class="price">$25.00</div>
                  <a href="#" class="btn btn-menu">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div class="menu-item">
                <img
                  src="https://www.easycheesyvegetarian.com/wp-content/uploads/2014/02/Cheesy-lentil-burgers-11-500x500.jpg"
                  alt=""
                />

                <div class="title">Cheesy Lentil Burger | Chineese & Italian</div>

                <div class="location">Italy</div>

                <div class="order flex">
                  <div class="price">$25.00</div>
                  <a href="#" class="btn btn-menu">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div class="menu-item">
                <img
                  src="https://thecookreport.co.uk/wp-content/uploads/2019/02/Cauliflower-Burgers-6-500x500.jpg"
                  alt=""
                />

                <div class="title">Best Veggie Burger | Chineese & Italian</div>

                <div class="location">Italy</div>

                <div class="order flex">
                  <div class="price">$25.00</div>
                  <a href="#" class="btn btn-menu">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Burger
