import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // ✅ Importa correctamente `map`


@Injectable({
  providedIn: 'root' // ✅ Esto lo hace accesible en toda la app
})
export class ApiService {
  private productsUrl = 'https://dummyjson.com/products';
  private clientsUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {} // ✅ HttpClient inyectado correctamente

  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.productsUrl).pipe(
      map(response => response.products) // ✅ Extrae el array de productos
    );
  }

  getClients(): Observable<any[]> {
    return this.http.get<any>(this.clientsUrl).pipe(
      map(response => response.users) // ✅ Extrae el array de usuarios
    );
  }
}
