import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-copy',
  standalone: true,
  imports: [],
  templateUrl: './copy.component.html',
  styleUrl: './copy.component.scss'
})
export class CopyComponent {

  isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  copyToClipboard() {
    const textToCopy = this.getTextContent();
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles:', textToCopy);
    });
  }

  private getTextContent(): string {
    // Si necesitas obtener el contenido dinámico, asegúrate de acceder al DOM.
    const contentElement = document.querySelector('.content');
    return contentElement?.textContent || '';
  }
}
