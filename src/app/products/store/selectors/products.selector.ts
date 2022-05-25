import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsModel} from '../../models/products.model';
import { getProductsEntities, getProductsLoaded, getProductsLoading } from '../reducers/products.reducers';
import {getRouterState, RouterStateUrl} from '../reducers/router.reducers';
import {RouterReducerState} from '@ngrx/router-store';

export interface ProductState {
  entities: {[id: string]: ProductsModel};
  loaded: boolean;
  loading: boolean;
}

export const getProductsState = createFeatureSelector<ProductState>('products');

export const getAllProductsEntities = createSelector(getProductsState, getProductsEntities);
export const getAllProducts = createSelector(getAllProductsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
})
export const getAllProductsLoaded = createSelector(getProductsState, getProductsLoaded);
export const getAllProductsLoading = createSelector(getProductsState, getProductsLoading);

export const getRouterStateSelector1 = createSelector(getRouterState, (state: RouterReducerState<RouterStateUrl>) => state);
export const getRouterStateSelector2  = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
export const getProductById = createSelector(getAllProductsEntities, getRouterStateSelector2, (entities, router): ProductsModel => {
return router.state && entities[router.state.params.id];
});

// products state

