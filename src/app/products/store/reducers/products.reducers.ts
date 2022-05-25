import {ProductsModel} from '../../models/products.model';
import {ProductsActions} from '../actions/products.actions';

export interface ProductState {
  entities: {[id: string]: ProductsModel};
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: ProductsActions): ProductState  {
    switch (action.type) {
      case 'LOAD_PRODUCTS': {
        return {
          ...state,
          loading: true
        };
      }

      case 'LOAD_PRODUCTS_SUCCESS': {
        console.log(action.payload);
        console.log(state);
        const data = action.payload;
        // tslint:disable-next-line:no-shadowed-variable
        const entities = data.reduce((entities: {[id: number]: ProductsModel}, product) => {
          return {
            ...entities,
            [product.id]: product
          };
        }, {
          ...state.entities
        });
        return {
          ...state,
          loading: true,
          loaded: false,
          entities
        };
      }

      case 'LOAD_PRODUCTS_FAIL': {
        return {
          ...state,
          loading: false,
          loaded: false
        };
      }

      case 'ADD_PRODUCT': {
        console.log(state);
        console.log('data to merge', action.payload);
        const entities = {...state.entities};
        entities[action.payload.id] = action.payload;
        return {
          ...state,
          loading: true,
          loaded: false,
          entities
        };
      }
    }
    return state;
}

export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProductsEntities = (state: ProductState) => state.entities;
