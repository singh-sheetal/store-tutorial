import { Action } from '@ngrx/store';
import {ProductsModel} from '../../models/products.model';

// load products

export class LoadProducts implements Action {
  readonly type = 'LOAD_PRODUCTS';
}


export class LoadProductsFail implements Action {
  readonly type = 'LOAD_PRODUCTS_FAIL';
  constructor(public payload: any) {}

}


export class LoadProductsSuccess implements Action {
  readonly type = 'LOAD_PRODUCTS_SUCCESS';
  constructor(public payload: ProductsModel[]) {
    console.log(payload);
  }
}

export class AddProduct implements Action {
  readonly type = 'ADD_PRODUCT';
  constructor(public payload: ProductsModel) {
    console.log(payload);
  }
}

export class GetProduct implements Action {
  readonly type = 'GET_PRODUCT';
  constructor(public payload: {id: number}) {
    console.log(payload);
  }
}

// action types
export type ProductsActions = LoadProducts | LoadProductsFail | LoadProductsSuccess | AddProduct | GetProduct;
