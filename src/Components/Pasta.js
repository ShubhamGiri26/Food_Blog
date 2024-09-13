import React from 'react'
import { Link } from "react-router-dom";

const Pasta = () => {
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
              <Link className="head-link" to="/pasta">Pasta </Link>
            </li>
          </ul>

          <div class="container">
            <div class="restaurant-menu">
              <div class="menu-item">
                <img
                  src="https://cdn.loveandlemons.com/wp-content/uploads/2023/06/roasted-red-pepper-pasta-580x580.jpg" 
                  alt=""
                />

                <div class="title">Roasted Red Pepper Pasta | Chineese & Italian</div>

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
                  src="https://www.alicaspepperpot.com/wp-content/uploads/2019/10/DSC_0419-scaled-480x480.jpg"   alt=""/>

                <div class="title">Pasta with Vodka Cream Sauce | Chineese & Italian</div>

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
                  src="https://www.acouplecooks.com/wp-content/uploads/2023/01/Red-Sauce-Pasta-009-480x480.jpg"
                  alt=""
                />

                <div class="title">Red Sauce Pasta | Chineese & Italian</div>

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

export default Pasta
