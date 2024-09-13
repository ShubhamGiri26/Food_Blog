import React from "react";
import { Link } from "react-router-dom";

const Pizza = () => {
  return (
    <>
      <div class="section" id="menu">
        <div class="container">
          <ul class="category">
            <li class="active">
              <Link to="/cards">All</Link>
            </li>
            <li>
              <Link className="head-link" to="/momos"> Momos </Link>
            </li>
            <li>
              <Link className="head-link" to="/sweets">  Sweets </Link>
            </li>
            <li>
              <Link className="head-link" to="/pizza">  Pizza </Link>
            </li>
            <li>
              <Link className="head-link" to="/burger">  Burger  </Link>
            </li>
            <li>
              <Link className="head-link" to="/pasta">  Pasta  </Link>
            </li>
          </ul>

          <div class="container">
            <div class="restaurant-menu">
              <div class="menu-item">
                <img
                  src="https://th.bing.com/th/id/OIP.2U0ka01fdakHh1vY9rp2qwHaE8?rs=1&pid=ImgDetMain"
                  alt=""
                />

                <div class="title">Pizza | Chineese & Italian</div>

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
                  src="https://th.bing.com/th/id/OIP.dIROGSr3kkP4Aae2yr8GywAAAA?pid=ImgDet&w=185&h=123&c=7&dpr=1.3"  alt=""/>

                <div class="title">Pizza | Chineese & Italian</div>

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
                  src="https://th.bing.com/th/id/OIP.vDzbVVwT-vkuCXOHDi7KXwHaFA?pid=ImgDet&w=207&h=140&c=7&dpr=1.3"
                  alt=""
                />

                <div class="title">Pizza | Chineese & Italian</div>

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
                  src="https://th.bing.com/th/id/OIP.JMke7px9G_ZGvPkZx-sWqAHaFT?pid=ImgDet&w=207&h=148&c=7&dpr=1.3"
                  alt=""
                />

                <div class="title">Pizza | Chineese & Italian</div>

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
                  src="https://th.bing.com/th/id/OIP.6MQONtf3OJfybbJiIyYmJwHaET?pid=ImgDet&w=207&h=120&c=7&dpr=1.3"
                  alt=""
                />

                <div class="title">Pizza | Chineese & Italian</div>

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
                  src="https://th.bing.com/th/id/OIP._-ZkTcYVOYKqgTPUx9_aZQHaE8?pid=ImgDet&w=185&h=123&c=7&dpr=1.3"
                  alt=""
                />

                <div class="title">Pizza | Chineese & Italian</div>

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
  );
};

export default Pizza;
