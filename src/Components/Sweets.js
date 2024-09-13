import React from 'react'
import { Link } from "react-router-dom";

const Sweets = () => {
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
                  src="https://www.womanandhomemagazine.co.za/wp-content/uploads/2022/05/Easy-chocolate-nut-brownies.jpg" 
                  alt=""
                />

                <div class="title">Brownies | Chineese & Italian</div>

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
                  src="https://onlinecakewale.com/wp-content/uploads/2023/08/sq-snicker-chocolate-cake0028choc-AE-600x600.webp"   alt=""/>

                <div class="title">Pastry | Chineese & Italian</div>

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
                  src="https://thebigmansworld.com/wp-content/uploads/2024/04/protein-muffin-recipe-1.jpg"
                  alt=""
                />

                <div class="title">Muffins | Chineese & Italian</div>

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
                  src="https://th.bing.com/th/id/OIP.DvtMOyIlvS9WIwvBA_EI2AAAAA?rs=1&pid=ImgDetMain"
                  alt=""
                />

                <div class="title">Cookies | Chineese & Italian</div>

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
                  src="https://cdn.loveandlemons.com/wp-content/uploads/2022/09/oatmeal-pancakes-500x500.jpg"
                  alt=""
                />

                <div class="title">PanCakes | Chineese & Italian</div>

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
                  src="https://www.healthylifetrainer.com/wp-content/uploads/2020/10/Homemade-Baked-Donuts-With-Chocolate-Frosting-5-500x500.jpg"
                  alt=""
                />

                <div class="title">Donuts | Chineese & Italian</div>

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

export default Sweets
