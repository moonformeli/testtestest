import { createContext } from "react";
import { observable } from "mobx";
import { IProductionPayload } from "../models/interface/IProductionItems";

export default class ProductStore {
  @observable products: IProductionPayload[] = [];
  @observable wishList: IProductionPayload[] = [];
  savedItems = {};

  constructor(products: IProductionPayload[]) {
    this.products = products;

    this.hasItem = this.hasItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  hasItem(id) {
    return this.savedItems[id];
  }

  saveItem(id: IProductionPayload["id"]) {
    const item = this.products.find(item => item.id === id);
    this.savedItems[id] = id;
    this.wishList.push(item);

    console.dir(this.wishList);
  }

  removeItem(id) {
    const _list = this.wishList.slice();
    for (let i = 0; i < _list.length; i += 1) {
      if (_list[i].id === id) {
        this.wishList = [..._list.slice(0, i), ..._list.slice(i + 1)];
        return;
      }
    }
  }
}

export const ProductStoreCtx = createContext<ProductStore>(null);
