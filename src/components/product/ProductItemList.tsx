import * as React from "react";
import { observer } from "mobx-react-lite";
import { classes } from "typestyle";
import { IProductionPayload } from "../../models/interface/IProductionItems";
import {
  cardStyle,
  imgStyle,
  captionStyle,
  priceStyle,
  wishListBtnStyle,
  available,
  notAvailable
} from "./ProductItemListStyles";
import { numberWithCommas } from "../../utils";
import { ProductStoreCtx } from "../../stores/ProductStore";

interface IProductItemListProps {
  list: IProductionPayload[];
}

const ProductItemList: React.FC<IProductItemListProps> = ({ list }) => {
  const store = React.useContext(ProductStoreCtx);
  const { hasItem, saveItem } = store;
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const dataset = e.target["dataset"];
    console.dir(dataset);

    saveItem(dataset["id"]);
    // const { dataset } = e.target;
    // console.dir(dataset);
  };

  const items =
    list &&
    list.map((product: IProductionPayload, i) => {
      const { coverImage, title, price, id } = product;
      const isSaved = hasItem(id);
      const className = isSaved ? notAvailable : available;

      return (
        <div key={i}>
          <figure className={cardStyle}>
            <img className={imgStyle} src={coverImage} />
            <figcaption className={captionStyle}>
              <p>{title}</p>
              <p>
                <span className={priceStyle}>{numberWithCommas(price)} 원</span>
              </p>
              <p>
                <span
                  data-id={id}
                  onClick={handleClick}
                  className={classes(wishListBtnStyle, className)}
                >
                  {isSaved ? "빼기" : "담기"}
                </span>
              </p>
            </figcaption>
          </figure>
        </div>
      );
    });
  return <>{items}</>;
};

export default observer(ProductItemList);
