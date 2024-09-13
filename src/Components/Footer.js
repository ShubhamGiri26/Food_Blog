import React from 'react';

const Footer = () => {
  return (
// <!-- Footer -->
    <div class="footer">
      <div class="container flex">
        <div class="footer-about">
          <h2>About</h2>
          <p>
          Welcome to our food blog where we share delicious recipes and cooking tips.This site is my little corner of the internet where I share my passion for all things culinary. 
          Whether you’re here to find quick college-friendly recipes or to explore some gourmet ideas, you’re in the right place!
          </p>
        </div>

        <div class="footer-category">
          <h2>Our Menu</h2>

          <ul>
            <li>Biryani</li>
            <li>Chicken</li>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
          </ul>
        </div>

        <div class="quick-links">
          <h2>Quick Links</h2>

          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Services</li>
          </ul>
        </div>

        <div class="get-in-touch">
          <h2>Get in touch</h2>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Suggession</li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>Copyright &copy; 2022. All Rights Reserved.</p>
        <i className='fa-brands fa-facebook'></i>
        <i className='fa-brands fa-instagram'></i>
        <i className='fa-brands fa-pinterest'></i>
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-brands fa-youtube'></i>
      </div>
    </div>

  );
};

export default Footer;


