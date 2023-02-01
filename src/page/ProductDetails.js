import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="products-details-container">
      <img
        src={`http://localhost:5000/${product?.productImage}`}
        alt="product"
      />
      <h1>{product?.price}$</h1>
      <p>{product?.details}</p>
    </div>
  );
};

export default ProductDetails;
