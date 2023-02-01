import React from "react";
import { Facebook } from "../assets/facebook";
import { Instagram } from "../assets/instagram";
import { Vkontakt } from "../assets/vkontakt";
import { Whatsapp } from "../assets/whatsapp";
import Button from "../components/Button";
import PartnerCardimg from "../assets/partner-card.png";
import PartnerCardimg2 from "../assets/partner-card2.png";
import "./Contact.css";

export const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-switch">
          <p>Home / Contacts</p>
        </div>
        <div className="contact-information">
          <div className="contact-information-head">
            <h3>Contact details</h3>
          </div>
          <div className="contact-information-cards">
            <div className="contact-information-card-phone">
              <div className="contact-information-card-title">
                <p>Phone number</p>
              </div>
              <div className="contact-phone">
                <p>
                  8 (800) 511 36 39 (toll-free in Russia)
                  <p>Mon-Fri 9:00-21:00</p>
                </p>
              </div>
              <div className="contact-information-social">
                <Vkontakt />
                <Whatsapp />
                <Facebook />
                <Instagram />
              </div>
            </div>

            <div className="contact-information-card-mail">
              <div className="contact-information-title">
                <h3>E-mail for communication</h3>
                <p>zakaz@waveharmony.com</p>
              </div>
              <div className="contact-information-title2">
                <h3>Do you want to become a dealer?</h3>
                <p>partner@waveharmony.com</p>
              </div>
            </div>
            <div className="contact-information-card-requisites">
              <h3>Requisites</h3>
              <div className="contact-adress">
                <p>IP Muraviev Pavel Alekseevich 249034, </p>
                <p>Kaluga region</p>
              </div>

              <Button text="Show all details" />
            </div>
          </div>
        </div>

        <div className="partner-content">
          <div className="partner-head">
            <h3>Company partners</h3>
          </div>

          <div className="partner-cards">
            <div className="partner-card">
              <div className="partner-card-title">
                <h3>Surfbrother Skolkovo</h3>
              </div>
              <div className="partner-card-address">
                <p>Moscow, Skolkovo, Bolshoy</p>
                <p> Boulevard, 40, BC Amalthea</p>
              </div>
              <div className="partner-card-img">
                <img src={PartnerCardimg} alt="partner" />
                <img src={PartnerCardimg2} alt="partner2" />
              </div>
              <div className="partner-hours">
                <h4>Opening hours:</h4>
                <p> from 10:00 to 18:00s</p>
              </div>
              <div className="partner-telephone">
                <h4>Telephone:</h4>
                <a href="tel:+7 (499) 283-63-82">+7 (499) 283-63-82</a>
              </div>
              <div className="partner-site">
                <h4>Website:</h4>
                <a href="https://skolkovo.surfbrothers.ru/">
                  skolkovo.surfbrothers.ru
                </a>
              </div>
            </div>
            <div className="partner-card">
              <div className="partner-card-title">
                <h3>Surfbrother Skolkovo</h3>
              </div>
              <div className="partner-card-address">
                <p>Moscow, Skolkovo, Bolshoy</p>
                <p> Boulevard, 40, BC Amalthea</p>
              </div>
              <div className="partner-card-img">
                <img src={PartnerCardimg} alt="partner" />
                <img src={PartnerCardimg2} alt="partner2" />
              </div>
              <div className="partner-hours">
                <h4>Opening hours:</h4>
                <p> from 10:00 to 18:00s</p>
              </div>
              <div className="partner-telephone">
                <h4>Telephone:</h4>
                <a href="tel:+7 (499) 283-63-82">+7 (499) 283-63-82</a>
              </div>
              <div className="partner-site">
                <h4>Website:</h4>
                <a href="https://skolkovo.surfbrothers.ru/">
                  skolkovo.surfbrothers.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
