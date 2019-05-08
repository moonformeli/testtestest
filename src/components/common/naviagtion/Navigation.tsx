import * as React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { containerStyle, navigationStyle } from "./NavigationStyles";
import { ProductStoreCtx } from "../../../stores/ProductStore";

const Navigation: React.FC = () => {
  const store = React.useContext(ProductStoreCtx);
  const [length, setLength] = React.useState(0);
  const { wishList } = store;
  console.dir(wishList);

  React.useEffect(() => {
    console.log(`length:${length}`);
    setLength(wishList.length);
  }, [wishList.length]);

  return (
    <header className={containerStyle}>
      <nav>
        <ul className={navigationStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/wishlist">Wish List({length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default observer(Navigation);
