import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsModel} from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private getProducts = '../../assets/db.json';
  constructor(private http: HttpClient) {}


  fetchProducts(): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(this.getProducts);
  }
}
