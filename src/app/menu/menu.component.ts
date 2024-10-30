import { Component } from '@angular/core';
import { ThemeService } from '../theme-colors.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(
    private themeService: ThemeService
  ) { }

  cambioTema() {
    this.themeService.toggleTheme()
  }

  getLight() {
    return this.themeService.getTheme()
  }


}
