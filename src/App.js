import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import { Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Blog from "./page/Blog";
import Footer from "./components/Footer";
import Catalog from "./page/Catalog";
import ProductDetails from "./page/ProductDetails";
import { Contact } from "./page/Contact";
import NotFoundPage from "./page/NotFoundPage";
import Dimensions from "./page/Dimensions";
import ProductBasket from "./page/ProductBasket";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/products/:id" exact component={ProductDetails} />
          <Route path="/dimensions" exact component={Dimensions} />
          <Route path="/productBasket" exact component={ProductBasket} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
