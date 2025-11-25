// src/app/components/galeria/galeria.component.ts
import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { Producto } from '../../models/producto.model';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css'],
  imports: [
    CommonModule,   // ✅ Para directivas como *ngIf, *ngFor
    DecimalPipe     // ✅ Para usar el pipe number en la plantilla
  ]
})
export class Galeria implements OnInit {

  productos: Producto[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(private Productos: Productos) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.error = '';

    this.Productos.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
        this.error = 'No se pudieron cargar los productos. Intenta nuevamente más tarde.';
        this.cargando = false;
      }
    });
  }

  agregarAlCarrito(producto: Producto): void {
    // Por ahora solo mostramos en consola.
    // Aquí luego se podrá integrar la lógica real de carrito.
    console.log('Agregar al carrito:', producto);
    alert(`Producto agregado al carrito: ${producto.titulo}`);
  }
}