import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  imports: [],
  template: `
  <!-- Enlace que apunta a la raíz y contiene el logo -->
    <a href="/" class="logodark">
      <!-- Imagen del logo -->
      <img
        src="./assets/images/logos/dark-logo.svg"
        class="align-middle m-2"
        alt="logo"
      />
    </a>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
  constructor(private settings: CoreService) {}
}
