import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme-colors.service';
import { MenuComponent } from "./menu/menu.component";
import { CommonModule } from '@angular/common';
import { RecursosComponent } from "./recursos/recursos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule, RecursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio v1';
  abierto = true;

  constructor(
    private themeService: ThemeService
  ) { }

  cambioTema() {
    this.themeService.toggleTheme()
  }
}
