// src/app/models/producto.model.ts
export interface Producto {
  id: number;
  titulo: string;
  precio: number;
  stock: number;
  imagen_url?: string; // opcional
  // Si tu tabla tiene más campos, agrégalos aquí
}