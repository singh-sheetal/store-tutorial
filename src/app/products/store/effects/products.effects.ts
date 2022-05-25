import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {ProductsService} from '../../services/products.service';
import {ProductsModel} from '../../models/products.model';
import {of} from 'rxjs';

@Injectable ()
export class ProductsEffects {
  constructor(private action$: Actions, private productsService: ProductsService) {}

  @Effect()
  loadProducts$ = this.action$.pipe(
    ofType('LOAD_PRODUCTS'),
    mergeMap(() =>
         this.productsService.fetchProducts()
           .pipe(
              map((products: ProductsModel[]) =>  {
                return {type: 'LOAD_PRODUCTS_SUCCESS', payload: products};
              }),
              catchError(() => of({type: '[PRODUCTS] Load Products Fail'}))
      )
    )
  );
}
