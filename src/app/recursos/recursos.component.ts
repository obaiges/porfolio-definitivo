import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.scss'
})
export class RecursosComponent {
  
  colores = [
    {
      name: '#F5F5F5',
      color: '--bg-color'
    },
    {
      name: '#DCE4EF',
      color: '--section-bg-color'
    },
    {
      name: '#5A7D9A',
      color: '--button-color'
    },
    {
      name: '#2E2E2E',
      color: '--text-color'
    },
    {
      name: '#6C7A89',
      color: '--text-secondary-color'
    },
    {
      name: '#A2B9D6',
      color: '--accent-color'
    },
  ]

}
