import React from "react";
import "./Dimensions.css";
import dimensionsGirl from "../assets/dimensions-girl.png";
import breastGirl from "../assets/breast.png";
import hipsGirl from "../assets/hips1.png";

const Dimensions = () => {
  return (
    <div className="dimensions">
      <div className="dimensions-head">
        <p>Home </p>
        <p className="dimensions-faded">/ How to choose the size</p>
      </div>
      <div className="dimensions-container">
        <div className="dimensions-title">
          <h3>How to choose the size</h3>
          <p>You will need to take measurements with a tape measure.</p>
        </div>
        <div className="dimensions-cards">
          <div className="dimensions-card">
            <div className="dimensions-card-img">
              <img src={dimensionsGirl} alt="girl" />
              <p>Waist</p>
            </div>
            <div className="dimensions-card-img-title">
              <p>
                We measure strictly horizontally along the narrowest part of the
                body, passing through the most protruding point of the abdomen.
              </p>
            </div>
          </div>
          <div className="dimensions-card">
            <div className="dimensions-card-img">
              <img src={breastGirl} alt="girl" />
              <p>Breast</p>
            </div>
            <div className="dimensions-card-img-title">
              <p>
                From the front, the tape should pass through the most prominent
                points, from the side through the armpits, and from behind, wrap
                around the shoulder blades.
              </p>
            </div>
          </div>
          <div className="dimensions-card">
            <div className="dimensions-card-img">
              <img src={hipsGirl} alt="girl" />
              <p>Hips</p>
            </div>

            <div className="dimensions-card-img-title">
              <p>
                The tape should be horizontal, passing in the middle of the
                thigh and behind the most protruding points of the buttocks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dimensions-size-container">
        <div className="dimensions-measure">
          <h4>Russian</h4>
          <p>40/42</p>
          <p>42/44</p>
          <p>44/46</p>
          <p>46/48</p>
        </div>
        <div className="dimensions-measure">
          <h4>International</h4>
          <p>XS</p>
          <p>S</p>
          <p>M</p>
          <p>L</p>
        </div>
        <div className="dimensions-measure">
          <h4>Chest (cm)</h4>
          <p>80-84</p>
          <p>84-86</p>
          <p>89-91</p>
          <p>94-100</p>
        </div>
        <div className="dimensions-measure">
          <h4>Waist(cm)</h4>
          <p>60-65</p>
          <p>65-68</p>
          <p>68-74</p>
          <p>74-80</p>
        </div>
        <div className="dimensions-measure">
          <h4>Hip(cm)</h4>
          <p>85-90</p>
          <p>91-95</p>
          <p>95-100</p>
          <p>100-110</p>
        </div>
      </div>
      <div className="dimensions-info-size">
        <p className="back-paragh">
          If you are taller than 175cm, choose +1 size. A girl with parameters
          85×66×93 falls into the "S" size, but in case of height above 175 cm,
          it is necessary to choose the "M" size.
        </p>
        <p>
          You can also order an individual tailoring of your favorite swimsuit.
          The process usually takes 3-4 working days, and its cost is +1500
          rubles to the cost of the model.
        </p>
        <p>
          If you have any difficulties with the choice, our managers will be
          happy to help you decide on the size in the telephone mode.
        </p>
      </div>
    </div>
  );
};

export default Dimensions;
