import React from "react";
import bigPhoto from "../assets/big-photo-grid.png";
import BlogSea from "../assets/blog-sea.png";
import Bloggirl from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";
import blog9 from "../assets/blog9.png";
import blog10 from "../assets/blog10.png";
import blog11 from "../assets/blog11.png";
import blog12 from "../assets/blog12.png";
import blog13 from "../assets/blog13.png";
import "./Blog.css";
import Button from "../components/Button";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-head">
        <div className="blog-title">
          <h3 className="blog-title-h3">
            Do you like bright swimwear and inspiring landscapes?
          </h3>
          <p>Follow us on Instagram for everything and more</p>
        </div>
        <div className="blog-button">
          <Button text="Subscribe to instagram" />
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <div className="grid-img">
            <img src={bigPhoto} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item2">
          <div className="grid-img ">
            <img src={BlogSea} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item3">
          <div className="grid-img">
            <img src={Bloggirl} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item4">
          <div className="grid-img">
            <img src={blog4} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item5">
          <div className="grid-img">
            <img src={blog5} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item6">
          <div className="grid-img">
            <img src={blog6} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item7">
          <div className="grid-img">
            <img src={blog7} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item8">
          <div className="grid-img">
            <img src={blog8} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item9">
          <div className="grid-img">
            <img src={blog9} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item10">
          <div className="grid-img">
            <img src={blog10} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item11">
          <div className="grid-img">
            <img src={blog11} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item12">
          <div className="grid-img">
            <img src={Bloggirl} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item13">
          <div className="grid-img">
            <img src={blog12} alt="photo" />
          </div>
        </div>
        <div className="grid-item grid-item14">
          <div className="grid-img">
            <img src={blog13} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
