import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext";
import { ProductCard } from "../components/ProductCart";
import HeroSection from "../components/HeroSection";
import Trust from "../components/Trust";
import TheBest from "../components/TheBest";
import Blog from "../page/Blog";
import Button from "../components/Button";
import "./Home.css";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const Home = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <HeroSection />
      <div className="product-section">
        <div className="product-cart-text">
          <div className="product-cart-title">
            <h3 className="product-card-title">Most Popular Models</h3>

            <p className="product-card-subtitle">the most popular product</p>
          </div>

          <Link to={"/catalog"}>
            <Button text="Show more" variant="stroke" />
          </Link>
        </div>

        <div className="home-container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={20}
            loop={true}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  productImage={product.productImage}
                  price={product.price}
                  size={["XS ", "S ", "M ", "L ", "By the standards"]}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Trust />
      <Blog />
      <TheBest />
    </>
  );
};

export default Home;
