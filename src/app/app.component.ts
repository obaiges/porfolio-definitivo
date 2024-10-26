import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme-colors.service';
import { MenuComponent } from "./menu/menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio v1';
  colores = [
    {
      name: 'Color de fondo',
      color: '--bg-color'
    },
    {
      name: 'Color secciones',
      color: '--section-bg-color'
    },
    {
      name: 'Color botones',
      color: '--button-color'
    },
    {
      name: 'Color de texto',
      color: '--text-color'
    },
    {
      name: 'Color secundario',
      color: '--text-secondary-color'
    },
    {
      name: 'Color acentuado',
      color: '--accent-color'
    },
  ]

  constructor(
    private themeService: ThemeService
  ) { }

  cambioTema() {
    this.themeService.toggleTheme()
  }
}
