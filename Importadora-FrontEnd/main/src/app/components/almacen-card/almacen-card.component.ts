import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-almacen-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './almacen-card.component.html',
  styleUrl: './almacen-card.component.scss'
})
export class AlmacenCardComponent {
  onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
