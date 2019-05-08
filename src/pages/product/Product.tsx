import * as React from "react";
import { style } from "typestyle";
import { observer } from "mobx-react-lite";
import { ProductStoreCtx } from "../../stores/ProductStore";
import ProductItemList from "../../components/product/ProductItemList";

const containerStyle = style({
  border: "1px solid blue",
  display: "flex",
  flexWrap: "wrap"
});

const Product: React.FC = () => {
  const store = React.useContext(ProductStoreCtx);
  const { products } = store;

  if (!products) {
    return (
      <div>
        <h1>데이터가 존재하지 않습니다.</h1>
      </div>
    );
  }

  return (
    <div className={containerStyle}>
      <ProductItemList list={products} />
    </div>
  );
};

export default observer(Product);
