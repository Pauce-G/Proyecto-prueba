import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-inventario-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './inventario-card.component.html',
  styleUrl: './inventario-card.component.scss'
})
export class InventarioCardComponent {
   onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
