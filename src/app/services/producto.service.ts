import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

}
