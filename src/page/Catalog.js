import React, { useState } from "react";
import { ProductCard } from "../components/ProductCart";
import SidebarItem from "../components/SidebarItem";
import "./Catalog.css";
import Items from "../Data/sidebar.json";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Catalog = () => {
  // const { products } = useContext(CartContext);
  const { cart, addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="catalog-section">
      <div className="header">
        <p className="main">Home</p>
        <p className="faded">/ Catalog</p>
      </div>

      <div className="catalog-container">
        <div className="catalog-title">
          <h2>Lycra surf women</h2>
        </div>
        <div className="catalog-bar">
          <ul className="catalog-menu">
            <li className="catalog-item">
              <a href="#">From cheap to expensive</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">Availability</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">Color</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">Style</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">Sleeves</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">The size</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">Price</a>
              <i className="bi-chevron-down"></i>
            </li>
            <li className="catalog-item">
              <a href="#">Popular queries</a>
              <i className="bi-chevron-down"></i>
            </li>
          </ul>

          <div className="catalog-view">
            <p>View:</p>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
          </div>
        </div>

        <div className="catalog-cart">
          <aside className="left-menu-container">
            {Items.map((item, index) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </aside>
          <div className="product-list">
            {[...products].map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                productImage={product.productImage}
                price={product.price}
                size={["XS", "S", "M", "L", "By the standards"]}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
