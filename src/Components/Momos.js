import React from 'react'
import { Link } from "react-router-dom";

const Momos = () => {
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
                  src="https://ubfoody.com/wp-content/uploads/2023/02/VEG-FRIED-MOMOS.jpg" 
                  alt=""
                />

                <div class="title">Veg Fried Momos | Chineese & Italian</div>

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
                  src="https://5.imimg.com/data5/SELLER/Default/2020/11/MS/KH/TP/70298688/frozen-egg-momos-500x500.jpg"   alt=""/>

                <div class="title">Frozen Egg Momos | Chineese & Italian</div>

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
                  src="https://cdn.grofers.com/assets/search/usecase/afghani_momos_zdish.png"
                  alt=""
                />

                <div class="title">Afghani Momos | Chineese & Italian</div>

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
                  src="https://img3.exportersindia.com/product_images/bc-full/2020/12/8048519/chicken-peri-peri-momos-1609316178-5672010.jpeg"
                  alt=""
                />

                <div class="title">Chicken Peri Peri Momos | Chineese & Italian</div>

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
                  src="https://nishkitchen.com/wp-content/uploads/2019/05/Tandoori-Momos-2B-480x480.jpg"
                  alt=""
                />

                <div class="title">Tandoori Momos | Chineese & Italian</div>

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
                  src="https://kitchenmai.com/wp-content/uploads/2019/03/chkn_momos2-e1564320413679-500x500.jpg"
                  alt=""
                />

                <div class="title">Chicken Momos with Chilli Chutney | Chineese & Italian</div>

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

export default Momos
