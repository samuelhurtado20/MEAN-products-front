import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put(this.url + id, product);
  }
}

// Carlos Eduardo Calderón Vildoso12:39
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Carlos Eduardo Calderón Vildoso12:42
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Carlos Eduardo Calderón Vildoso12:45
// https://www.hackerrank.com/challenges/picking-numbers/problem
// Tú13:02
// public static int birthdayCakeCandles(List<int> candles)
//     {
//         int last = 0;
//         foreach(int item in candles)
//         {
//             if(item > last) last = item;
//         }
        
//         int i = 0;
//         foreach(int item in candles)
//         {
//             if(item == last) i++;
//         }
        
//         return i;
//     }
// Carlos Eduardo Calderón Vildoso13:02
// https://www.sqlservertutorial.net/sql-server-sample-database/
// Tú13:22
// select b.brand_name, oi.list_price * oi.quantity as totalOi from production.products p 
// join production.brands b on p.brand_id = b.brand_id
// join sales.order_items oi on oi.product_id = p.product_id
// group by b.brand_name, oi.list_price * oi.quantity;
// Carlos Eduardo Calderón Vildoso13:24
// https://rickandmortyapi.com/api/character


// select b.brand_name, oi.list_price * oi.quantity as totalOi from production.products p 
// join production.brands b on p.brand_id = b.brand_id
// join sales.order_items oi on oi.product_id = p.product_id
// group by b.brand_name, oi.list_price * oi.quantity;