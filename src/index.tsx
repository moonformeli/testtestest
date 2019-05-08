import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/common/naviagtion/Navigation";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductStore, { ProductStoreCtx } from "./stores/ProductStore";
import { productItems } from "./api/models/productItems";

const App: React.FC = () => {
  const productStore = React.useRef(new ProductStore(productItems));

  return (
    <ProductStoreCtx.Provider value={productStore.current}>
      <section>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
        </Switch>
      </section>
    </ProductStoreCtx.Provider>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
