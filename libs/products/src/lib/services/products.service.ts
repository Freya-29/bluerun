import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'any'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() :Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:3000/api/v1/products')
  }

//   createCategory(category : Category):Observable<Category> {
//     return this.http.post<Category>('http://localhost:3000/api/v1/categories/', category);
//   }
}
