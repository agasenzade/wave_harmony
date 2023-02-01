import React from "react";
import { Email } from "../assets/email";
import "./Footer.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { Instagram } from "../assets/instagram";
import { Facebook } from "../assets/facebook";
import { Whatsapp } from "../assets/whatsapp";
import { Vkontakt } from "../assets/vkontakt";

import Button from "./Button";

function successButton() {
  swal({
    title: "Good job!",
    text: "Your email has been sent successfully",
    icon: "success",
  });
}

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-email">
        <div className="email-svg">
          <Email />
        </div>
        <div className="email-desc">
          <p>
            Get up-to-date information about all discounts, sales and new,
            trendy collections
          </p>
        </div>
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your E-mail"
            />
            <button
              type="button"
              onClick={successButton}
              className="alert-button"
            >
              {" "}
              >{" "}
            </button>
          </div>
        </form>
      </div>

      <div className="footer-container">
        <div className="footer-link">
          <div className="footer-title">
            <p>Useful links</p>
          </div>
          <div className="footer-links-list">
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/catalog" className="footer-links">
                  Catalog
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/blog" className="footer-links">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  About the brand
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Calculator
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/Dimensions" className="footer-links">
                  Dimensions
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/Shipping and payment" className="footer-links">
                  Shipping and payment
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/contacts" className="footer-links">
                  Contacts
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Gift certificates
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Sale up to -40%
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-link1">
          <div className="footer-title">
            <p>Product categories</p>
          </div>
          <div className="footer-links-list">
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/catalog" className="footer-links">
                  New collection 2021
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Swimwear Sale
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Surf swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Surf Lycra
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  One piece swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Separate swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Swimwear with sleeves
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Sleeveless swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Swimwear with cups
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links-list2">
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/catalog" className="footer-links">
                New collection 2021
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Swimwear Sale
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Surf swimwear
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Surf Lycra
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                One piece swimwear
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Separate swimwear
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Swimwear with sleeves
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Sleeveless swimwear
              </Link>
            </li>
          </ul>
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                Swimwear with cups
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-link">
          <div className="footer-title">
            <p>Often searched</p>
          </div>
          <div className="footer-links-list">
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Black swimwear with sleeves
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Sleeveless swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Mesh swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Sports swimwear for the pool
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/Dimensions" className="footer-links">
                  Printed swimwear
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/Shipping and payment" className="footer-links">
                  Off Shoulder
                </Link>
              </li>
            </ul>
            <ul className="footer-menu">
              <li className="footer-item">
                <Link to="/contacts" className="footer-links">
                  Swimwear
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-title">
            <p>Contact details</p>
          </div>
          <div className="footer-contact-mail">
            <a href="mailto:zakaz@waveharmony.com">zakaz@waveharmony.com</a>

            <a href="tel:8 (800) 511-36-39">8 (800) 511-36-39</a>
          </div>

          <div className="footer-contact-social">
            <Vkontakt />
            <Whatsapp />
            <Facebook />
            <Instagram />
          </div>
          <div className="footer-description">
            <p>
              Information for buyers Wave Harmony - women's clothing for surfing
              and any other water sports. All rights reserved. 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
