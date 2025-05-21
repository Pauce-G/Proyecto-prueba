import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-compras-card',
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './compras-card.component.html',
  styleUrl: './compras-card.component.scss'
})
export class ComprasCardComponent {
  onCardClick() {
  console.log('Card clickeado');
  // o navegar, emitir evento, etc.
}
}
