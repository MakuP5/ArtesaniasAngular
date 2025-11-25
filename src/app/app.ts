import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Escena3d } from './components/escena3d/escena3d'
import { Galeria } from './components/galeria/galeria'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Hero,Escena3d,Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing-angular');
}
