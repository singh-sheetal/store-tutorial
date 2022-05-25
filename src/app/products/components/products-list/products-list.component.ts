import { Component, OnInit } from '@angular/core';
import {ProductsModel} from '../../models/products.model';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import { ProductState } from '../../store/reducers/products.reducers';
import {getAllProducts, getAllProductsEntities, getProductsState} from '../../store/selectors/products.selector';
import {Observable} from 'rxjs';
import {LoadProducts} from '../../store/actions/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {
  private getProducts = '../../assets/db.json';
  productsList$: Observable<ProductsModel[]>;
  getProduct$: Observable<ProductsModel>
  constructor(private http: HttpClient, private store: Store<ProductState>) { }

  ngOnInit() {
    // this.http.get(this.getProducts).subscribe((data: ProductsModel[]) => {
    //   this.productsList = data;
    // });
    this.store.dispatch({type : 'LOAD_PRODUCTS'});
    this.productsList$ =  this.store.select<any>(getAllProducts);
  }

  addProduct(): void {
    this.store.dispatch({type: 'ADD_PRODUCT' , payload: {id: 6, title: 'Item 6', price: 200}});
    this.productsList$ =  this.store.select<any>(getAllProducts);
  }
}
