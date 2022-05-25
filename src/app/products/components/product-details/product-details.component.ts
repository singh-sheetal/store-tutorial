import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getProductById} from '../../store/selectors/products.selector';
import {Observable} from 'rxjs';
import {ProductsModel} from '../../models/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  productDetail$: Observable<ProductsModel>
  constructor(private store: Store) { }

  ngOnInit() {
    this.productDetail$ = this.store.select<any>(getProductById);
  }

}
