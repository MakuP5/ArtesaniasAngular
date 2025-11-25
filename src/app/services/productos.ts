// src/app/services/productos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  // URL base de la API
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  // GET /api/productos → Observable<Producto[]>
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
    